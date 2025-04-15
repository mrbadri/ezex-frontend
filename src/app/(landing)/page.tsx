import { GradientCardDemo } from "@/components/examples/gradient-card-demo";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";
import Link from "next/link";
import PatternBg from "./_assets/pattern-landing.svg";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <div className="relative z-0 h-screen pt-20">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={PatternBg}
                    alt="Background pattern"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="flex h-full flex-col items-center justify-between">
                {/* Title */}
                <div className="container mx-auto flex max-w-[800px] flex-1 flex-col items-center justify-center gap-4">
                    <Typography
                        variant="heading/xl"
                        responsiveVariant={{
                            sm: "heading/xxl",
                            md: "display/lg",
                            lg: "display/xl",
                        }}
                        align="center"
                    >
                        Trade Smarter Grow Faster with{" "}
                        <span className="text-primary">ezeX</span>
                    </Typography>
                    <Typography
                        variant="body/3xl/medium"
                        className="text-neutral-600"
                    >
                        Seize the moment—your crypto future starts now
                    </Typography>

                    <div className="flex items-center gap-4 xl:mt-10">
                        <Input
                            className="w-80 bg-neutral-950"
                            placeholder="Email / Phone number"
                        />
                        <Link
                            href="/auth/sign-in/email"
                            className={cn(
                                buttonVariants({ size: "xl" }),
                                "shrink-0",
                            )}
                        >
                            Signup
                        </Link>
                    </div>
                </div>

                {/* Bar */}
                <div className="md:flec-row mb-10 flex w-full flex-col justify-around gap-6 bg-neutral-950 px-10 pt-8 pb-7 text-center md:flex-row">
                    {[
                        {
                            label: "17+m",
                            description: "Register user",
                        },
                        {
                            label: "2500+",
                            description: "Crypocurrentcies",
                        },
                        {
                            label: "$6.62m",
                            description: "24H Trading volume",
                        },
                        {
                            label: "140+",
                            description: "Countries",
                        },
                    ].map((item, index) => (
                        <div
                            className="flex flex-col items-center justify-center gap-2"
                            key={index}
                        >
                            <Typography
                                variant="heading/lg"
                                responsiveVariant={{
                                    md: "heading/xl",
                                    lg: "heading/xxl",
                                }}
                            >
                                {item.label}
                            </Typography>
                            <Typography
                                variant="body/base"
                                responsiveVariant={{
                                    md: "body/lg",
                                    lg: "body/xl",
                                }}
                                className="text-neutral-600"
                            >
                                {item.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
