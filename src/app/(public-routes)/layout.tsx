import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { privateRoutes } from "@/shared/constants/private.routes";

export default async function UnauthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (session) {
        console.log("ESTOU NO LAYOUT PUBLICO");
        redirect(privateRoutes.default_route());
    }

    return <>{children}</>;
}
