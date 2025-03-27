import { Typography } from "@/components/ui/typography";

export default function Home() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <Typography
                data-testid="homepage-title"
                weight="bold"
                variant="body/xl"
                responsiveVariant={{
                    sm: "body/2xl",
                    md: "heading/lg",
                    lg: "heading/xl",
                    xl: "display/xl",
                }}
            >
                Welcome to EZEX Exchange!
            </Typography>
        </div>
    );
}
