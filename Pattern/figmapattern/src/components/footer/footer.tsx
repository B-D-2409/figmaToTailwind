import FooterName from "./footer-name-page";
import FooterLink from "./footer-link-page";
import FooterContacts from "./footer-contacts-page";
import { Typography } from "../shared/typography";

/**
 * Footer Component
 *
 * Renders a responsive website footer with branding, product links, contact info,
 * and a decorative SVG background. Adapts to mobile and desktop layouts.
 *
 * Desktop layout:
 * - Displays FooterName, FooterLink, and FooterContacts side by side
 *
 * Mobile layout:
 * - Stacks FooterName, FooterLink, and FooterContacts vertically
 *
 * The footer also includes:
 * - SVG decorative wave in the background
 * - Bottom copyright and author info
 *
 * @component
 * @example
 * <Footer />
 *
 * @returns {JSX.Element} Footer section
 */
function Footer() {
    return (
        <footer className="relative bg-white text-gray-800 pt-20 pb-10 px-8 overflow-hidden">

            <svg
                viewBox="0 0 1200 600"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[50%] top-0 transform -translate-x-1/2 w-[1160px] h-[600px] opacity-60 z-0"
            >
                <path
                    d="
            M600 580
            C520 440 160 340 350 80
            C400 5 560 5 600 120
            C660 5 780 5 860 100
            C990 340 680 400 600 580Z
            "
                    fill="#F3E8FF"
                />
            </svg>

            <div className="hidden md:flex justify-between z-10 gap-20 px-16">
                <FooterName />
                <FooterLink />
                <FooterContacts />
            </div>

            <div className="flex flex-col items-center text-center gap-10 md:hidden z-10 mt-8">
                <FooterName isMobile />
                <FooterLink isMobile />
                <FooterContacts isMobile />
            </div>

            <div className="relative max-w-7xl mx-auto border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500 z-10">
                <Typography>© 2023 Great.co. All Rights Reserved.</Typography>
                <Typography>
                    Made with love and code by <span className="font-semibold text-gray-700">Fundamental Studio</span>
                </Typography>
            </div>
        </footer>
    );
}

export default Footer;
