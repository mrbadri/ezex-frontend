import XLogoIcon from "@/components/icons/xLogo";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const LandingNavbar = () => {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex h-20 items-center justify-between px-8 py-6 backdrop-blur-xs">
            {/* Left */}
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/">
                    <div className="size-10 rounded bg-neutral-800" />
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-8">
                    <Link href="/">
                        <Typography variant="body/lg">Markets</Typography>
                    </Link>
                    <Link href="/">
                        <Typography variant="body/lg">Spot</Typography>
                    </Link>
                    <Link href="/">
                        <Typography variant="body/lg">Support</Typography>
                    </Link>
                    <Link href="/">
                        <Typography variant="body/lg">Blog</Typography>
                    </Link>
                </div>
            </div>

            {/* Right   */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" icon>
                    P
                </Button>
                <Button variant="secondary" icon>
                    <SearchIcon />
                </Button>

                <Button variant="ghost" icon>
                    <UserIcon />
                </Button>

                <Button>Login / Sign up</Button>
            </div>
        </div>
    );
};

export default LandingNavbar;
