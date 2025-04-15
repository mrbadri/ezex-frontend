import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardAction,
} from "@/components/ui/card";
import { Slot } from "@radix-ui/react-slot";

/**
 * Utility class generator for the GradientCard component using `class-variance-authority`.
 * Handles different line positions and gradient effects.
 */
const gradientCardVariants = cva(
    cn(
        "absolute inset-0 -z-10 overflow-hidden  rounded-xl",
        "before:absolute before:z-10 before:rounded-[100%]",
        "after:absolute  after:bg-radial after:from-neutral-700/70  after:bg-card  after:via-card after:via-50%  after:from-0% after:to-card ",
    ),
    {
        variants: {
            linePosition: {
                top: cn(
                    "before:top-0 before:left-[10%] before:right-[10%] before:h-[2px] before:bg-gradient-to-r ",
                    "after:top-0 after:bg-radial-[at_center_top] after:w-full after:h-36",
                ),

                right: cn(
                    "before:right-0 before:top-[10%] before:bottom-[10%] before:w-[2px] before:h-auto before:rounded-full before:bg-gradient-to-b",
                    "after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-radial-[at_right_center] after:h-full after:w-36",
                ),
                bottom: cn(
                    "before:bottom-0 before:left-[10%] before:right-[10%] before:h-[2px] before:rounded-full before:bg-gradient-to-r",
                    "after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-radial-[at_center_bottom] after:w-full after:h-36",
                ),
                left: cn(
                    "before:left-0 before:top-[10%] before:bottom-[10%] before:w-[2px] before:h-auto before:rounded-full before:bg-gradient-to-b",
                    "after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-radial-[at_-20%_center] after:h-full after:w-36",
                ),
            },

            gradientTheme: {
                primary:
                    "before:from-primary/0 before:via-primary before:to-primary/0",
            },
            /** Whether to show the background effect */
            showBackgroundEffect: {
                true: "after:absolute after:inset-0 after:opacity-20 after:rounded-xl after:blur-xl after:translate-y-1/2 after:-z-10",
                false: "",
            },
        }, 
        defaultVariants: {
            linePosition: "top",
            gradientTheme: "primary",
            showBackgroundEffect: false,
        },
    },
);

interface GradientCardProps
    extends React.ComponentProps<typeof Card>,
        VariantProps<typeof gradientCardVariants> {}

function GradientCard({
    className,
    linePosition,
    gradientTheme,
    showBackgroundEffect,
    children,
    ...props
}: GradientCardProps) {
    return (
        <Card className={cn("bg-card relative", className)} {...props}>
            {children}
            <div
                className={cn(
                    gradientCardVariants({
                        linePosition,
                        gradientTheme,
                        showBackgroundEffect,
                        className,
                    }),
                )}
            />
        </Card>
    );
}

// Export all components from the original Card with the new GradientCard
export {
    GradientCard,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
    gradientCardVariants,
};
