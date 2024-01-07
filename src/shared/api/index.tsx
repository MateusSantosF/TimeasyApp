import axios from "axios";
import { getSession } from "next-auth/react";

const baseURL = process.env.NEXT_API_BASE_URL || "http://localhost:5239";

const ApiClient = () => {
    const instance = axios.create({
        baseURL,
    });

    instance.interceptors.request.use(async (request) => {
        const session = await getSession();
        if (session) {
            request.headers["Authorization"] = `Bearer ${session.accessToken}`;
        }
        return request;
    });

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    // Call your API to refresh the token
                    const refreshedSession = await axios.get(
                        "/api/auth/refresh"
                    );
                    // Update Next-Auth session and request header
                    await updateSession(refreshedSession.data);
                    originalRequest.headers[
                        "Authorization"
                    ] = `Bearer ${refreshedSession.data.accessToken}`;
                    return instance(originalRequest);
                } catch (refreshError) {
                    // Handle failed refresh here
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

async function updateSession(newSessionData: any) {
    // Implement the logic to update Next-Auth session with newSessionData
}

const apiClient = ApiClient();

export default apiClient;
