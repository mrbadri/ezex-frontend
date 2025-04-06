import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Search } from "lucide-react";

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
            <div className="mt-10 flex items-end gap-4">
                <Button size="xs" iconLeft={<Search />} iconRight={<Search />}>
                    Button XS
                </Button>
                <Button size="sm" iconLeft={<Search />} iconRight={<Search />}>
                    Button SM
                </Button>
                <Button size="md" iconLeft={<Search />} iconRight={<Search />}>
                    Button DE
                </Button>
                <Button size="lg" iconLeft={<Search />} iconRight={<Search />}>
                    Button LG
                </Button>
                <Button size="xl" iconLeft={<Search />} iconRight={<Search />}>
                    Button XL
                </Button>
            </div>

            <div className="mt-10 flex items-end gap-4">
                <Button size="xs" icon>
                    <Search />
                </Button>
                <Button size="sm" icon>
                    <Search />
                </Button>
                <Button size="md" icon>
                    <Search />
                </Button>
                <Button size="lg" icon>
                    <Search />
                </Button>
                <Button size="xl" icon>
                    <Search />
                </Button>
            </div>
            <div className="mt-10 flex items-end gap-4 text-8xl">
                <Button
                    variant="default"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    Default
                </Button>
                <Button
                    variant="destructive"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    destructive
                </Button>
                <Button
                    variant="ghost"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    ghost
                </Button>
                <Button
                    variant="text"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    Text
                </Button>
                <Button
                    variant="link"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    link
                </Button>
                <Button
                    variant="outline"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    outline
                </Button>
                <Button
                    variant="secondary"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    secondary
                </Button>
            </div>
            <div className="mt-10 flex items-end gap-4 text-8xl">
                <Button
                    disabled
                    variant="default"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    Default
                </Button>
                <Button
                    disabled
                    variant="destructive"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    destructive
                </Button>
                <Button
                    disabled
                    variant="ghost"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    ghost
                </Button>
                <Button
                    disabled
                    variant="text"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    Text
                </Button>
                <Button
                    disabled
                    variant="link"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    link
                </Button>
                <Button
                    disabled
                    variant="outline"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    outline
                </Button>
                <Button
                    disabled
                    variant="secondary"
                    iconLeft={<Search />}
                    iconRight={<Search />}
                >
                    secondary
                </Button>
            </div>
        </div>
    );
}
