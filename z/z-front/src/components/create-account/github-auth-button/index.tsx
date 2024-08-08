"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function GithubAuthButton() {
    return (
        <div className="grid grid-cols-1 gap-6">
            <Button variant="outline">
                <Icons.gitHub className="mr-2 h-6 w-6"/>
                GitHub
            </Button>
        </div>
    );
}