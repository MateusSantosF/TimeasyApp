import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);
    if (!session) {
        console.log("ESTOU NO LAYOUT PRIVATE");
        redirect("/");
    }

    return <>{children}</>;
}
