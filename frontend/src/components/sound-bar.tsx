"use client";

import { Music, Pause, Play, Volume2 } from "lucide-react";
import { usePlayerStore } from "~/stores/use-player-store";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

export default function SoundBar () {
    const { track } = usePlayerStore();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
    <div className="px-4 pb-2">
    <Card className="px-4 pb-4 bg-background/60 relative w-full shrink-0 border-t py-0 backdrop-blur">
        <div className="space-y-2 p-3">
            <div className="flex items-center justify-between">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500">
                        {track?.artwork ? (
                            <img 
                            className="h-full w-full rounded-md object-cover" 
                            src={track.artwork} 
                            /> 
                        ):( 
                            <Music className="text-white" /> 
                            )}
                    </div>
                    <div className="max-w-24 min-w-0 flex-1 md:max-w-full">
                        <p className="truncate text-sm font-medium">
                            {track?.title}
                        </p>
                        <p className="text-muted-foreground truncate text-xs">
                            {track?.createdByUserName}
                        </p>    
                    </div>
                </div>
                {/*Centered Controls */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Button variant="ghost" size="icon">
                        {isPlaying ? <Pause /> : <Play />}
                    </Button>
                </div>

                {/*<Additional controls*/}
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                        <Volume2 />
                    </div>
                </div>
            </div>
        </div>
    </Card>
    </div>
    );
}
