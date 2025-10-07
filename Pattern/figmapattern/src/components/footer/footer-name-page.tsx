// components/Footer/FooterLeft.tsx
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "../shared/gift-icon";

interface FooterLeftProps {
    isMobile?: boolean;
}

function FooterName({ isMobile }: FooterLeftProps) {
    return (
        <div className={isMobile ? "flex flex-col items-center text-center" : "flex-1"}>
            <div className={isMobile ? "flex items-center justify-center gap-2 mb-3" : "flex items-center gap-2 mb-4"}>
                <Logo />
                <h2 className="text-xl font-semibold text-gray-900">Great.bg</h2>
            </div>
            <p className={isMobile ? "text-gray-600 text-sm mb-4 px-6" : "text-gray-600 mb-6"}>
                Generate outside the box thinking with the possibility to target the low.
            </p>
            {!isMobile && (
                <div className="flex gap-4 text-purple-700">
                    <Facebook className="w-5 h-5 cursor-pointer hover:opacity-70" />
                    <Instagram className="w-5 h-5 cursor-pointer hover:opacity-70" />
                    <Linkedin className="w-5 h-5 cursor-pointer hover:opacity-70" />
                    <Youtube className="w-5 h-5 cursor-pointer hover:opacity-70" />
                </div>
            )}
        </div>
    );
}
export  default FooterName;