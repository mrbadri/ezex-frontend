import React from "react";
import {
    GradientCard,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/gradient-card";

export function GradientCardDemo() {
    return (
        <div className="grid grid-cols-1 gap-6 py-14 md:grid-cols-2">
            <GradientCard linePosition="top">
                <CardHeader>
                    <CardTitle>Top Gradient Line</CardTitle>
                    <CardDescription>
                        Primary theme gradient at the top
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Card with a gradient line at the top and a subtle background
                    effect.
                </CardContent>
            </GradientCard>

            <GradientCard linePosition="right">
                <CardHeader>
                    <CardTitle>Right Gradient Line</CardTitle>
                    <CardDescription>
                        Info theme gradient on the right
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Card with a gradient line on the right side and a subtle
                    background effect.
                </CardContent>
            </GradientCard>

            <GradientCard linePosition="bottom">
                <CardHeader>
                    <CardTitle>Bottom Gradient Line</CardTitle>
                    <CardDescription>
                        Success theme gradient at the bottom
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Card with a gradient line at the bottom and a subtle
                    background effect.
                </CardContent>
            </GradientCard>

            <GradientCard linePosition="left">
                <CardHeader>
                    <CardTitle>Left Gradient Line</CardTitle>
                    <CardDescription>
                        Destructive theme gradient on the left
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Card with a gradient line on the left side and a subtle
                    background effect.
                </CardContent>
            </GradientCard>
        </div>
    );
}
