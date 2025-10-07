// components/Footer/FooterRight.tsx
import { MapPin, Phone, Mail } from "lucide-react";

interface FooterRightProps {
    isMobile?: boolean;
}

function FooterContacts({ isMobile }: FooterRightProps) {
    return (
        <div className={isMobile ? "" : "flex-1"}>
            <h3 className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>Контакти</h3>
            <ul className={isMobile ? "space-y-1 text-gray-600 text-sm" : "space-y-3 text-gray-600"}>
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
                            <span>Poligona, bl.43, ent.1-Offices, Office 5 Sofia 1750, Bulgaria</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Phone className="text-purple-700 w-5 h-5" />
                            <span>+359 886 299 300</span>
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
export  default FooterContacts;