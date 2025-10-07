import { MapPin, Phone, Mail } from "lucide-react";
import { Typography } from "../shared/typography";

interface FooterContactsProps {
    /** If true, renders a mobile-friendly simplified layout */
    isMobile?: boolean;
}

/**
 * FooterContacts Component
 *
 * Displays the company's contact information. 
 * Layout adapts for mobile (`isMobile = true`) or desktop (`isMobile = false` or undefined).
 *
 * @component
 * @param {FooterContactsProps} props
 * @param {boolean} [props.isMobile] - Optional flag to render a mobile version
 *
 * @example
 * // Desktop usage:
 * <FooterContacts />
 *
 * // Mobile usage:
 * <FooterContacts isMobile />
 *
 * @returns {JSX.Element} Contact information section
 */
function FooterContacts({ isMobile }: FooterContactsProps) {
    return (
        <div className={isMobile ? "" : "flex-1"}>
            <h3
                className={
                    isMobile
                        ? "text-base font-semibold mb-3"
                        : "text-lg font-semibold mb-4"
                }
            >
                Contacts
            </h3>

            <ul
                className={
                    isMobile
                        ? "space-y-1 text-gray-600 text-sm"
                        : "space-y-3 text-gray-600"
                }
            >
                {isMobile ? (
                    <>
                        <li>📍 Sofia, Bulgaria</li>
                        <li>📞 +359 886 299 300</li>
                        <li>✉️ office@ada-soft.bg</li>
                    </>
                ) : (
                    <>
                        <li className="flex gap-2 items-start">
                            <MapPin className="text-purple-700 w-5 h-5 mt-1" />
                            <Typography>Poligona, bl.43, ent.1-Offices, Office 5 Sofia 1750, Bulgaria</Typography>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Phone className="text-purple-700 w-5 h-5" />
                            <Typography>+359 886 299 300</Typography>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Mail className="text-purple-700 w-5 h-5" />
                            <a href="mailto:office@ada-soft.bg" className="hover:underline">
                                office@ada-soft.bg
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default FooterContacts;
