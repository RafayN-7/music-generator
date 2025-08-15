"use client"

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export function SongPanel() {
    const [mode, setMode] = useState<"simple" | "custom">("simple");

    return ( <div className="bg-muted/30 flex w-full flex-col border-r lg:w-80">
        <div className="flex-1 overflow-y-auto p-4">
            <Tabs value={mode}>
                <TabsList>
                    <TabsTrigger value="simple">Simple</TabsTrigger>
                    <TabsTrigger value="custom">Custom</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    </div>
    );
}
