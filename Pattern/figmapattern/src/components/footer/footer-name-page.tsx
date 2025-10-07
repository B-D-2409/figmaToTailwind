import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "../shared/gift-icon";
import { Typography } from "../shared/typography";

interface FooterNameProps {
    /** Optional flag to render mobile layout */
    isMobile?: boolean;
}

/**
 * FooterName Component
 *
 * Renders the brand/logo, a short description, and social media icons.
 * The layout adapts depending on the `isMobile` prop:
 *  - Mobile: stacked logo and text, no social icons
 *  - Desktop: logo, text, and social icons in a column
 *
 * @component
 * @param {FooterNameProps} props
 * @param {boolean} [props.isMobile] - Render mobile version if true
 *
 * @example
 * // Desktop usage
 * <FooterName />
 *
 * // Mobile usage
 * <FooterName isMobile />
 *
 * @returns {JSX.Element} Footer branding section
 */
function FooterName({ isMobile }: FooterNameProps) {
    return (
        <div className={isMobile ? "flex flex-col items-center text-center" : "flex-1"}>

            <div className={isMobile ? "flex items-center justify-center gap-2 mb-3" : "flex items-center gap-2 mb-4"}>
                <Logo />
                <Typography className="text-xl font-semibold text-gray-900">Great.bg</Typography>
            </div>

            <Typography className={isMobile ? "text-gray-600 text-sm mb-4 px-6" : "text-gray-600 mb-6"}>
                Generate outside the box thinking with the possibility to target the low.
            </Typography>

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

export default FooterName;
