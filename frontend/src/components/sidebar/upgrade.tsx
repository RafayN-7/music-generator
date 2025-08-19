"use client"

import { authClient } from "~/lib/auth-client"
import { Button } from "../ui/button"

export default function Upgrade() {
    const upgrade = async () => {
        await authClient.checkout({
            products: [
                "f52d7d14-7248-4a6e-bd0a-7e5578af79e3",
                "4a9ab1fa-7297-419e-9017-ff06117d4770",
                "cba37f79-cb61-41d0-a7d9-8845248fbb96",
            ],
        });
    };
return <Button variant="outline" size="sm" className="ml-2 cursor-pointer text-orange-400"
onClick={upgrade}

>
Upgrade
</Button>
}