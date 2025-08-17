"use server"

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "~/lib/auth";

export async function setPublishedStatus(songId: string, published: boolean) {
        const session = await auth.api.getSession({
        headers: await headers(),
    });
    
    if  (!session) redirect("/auth/sign-in");

}