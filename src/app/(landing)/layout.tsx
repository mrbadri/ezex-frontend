import { ScrollArea } from "@/components/ui/scroll-area";
import LandingNavbar from "./_components/landing-navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollArea className="bg-background flex h-screen flex-col overflow-auto">
            <LandingNavbar />
            {children}
        </ScrollArea>
    );
};

export default LandingLayout;
