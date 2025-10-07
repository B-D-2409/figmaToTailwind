import { Typography } from "../shared/typography";

interface FooterLinksProps {
    /** If true, renders a mobile-friendly layout with fewer columns */
    isMobile?: boolean;
}

/**
 * FooterLink Component
 *
 * Renders a list of product categories and useful links in the footer.
 * The layout changes depending on whether `isMobile` is true:
 *  - Mobile: Only left and middle columns are displayed side by side
 *  - Desktop: Left, middle, and right columns are displayed
 *
 * @component
 * @param {FooterLinksProps} props
 * @param {boolean} [props.isMobile] - Optional flag to render the mobile version
 *
 * @example
 * // Desktop usage:
 * <FooterLink />
 *
 * // Mobile usage:
 * <FooterLink isMobile />
 *
 * @returns {JSX.Element} Footer links section
 */
function FooterLink({ isMobile }: FooterLinksProps) {
    const leftColumn = (
        <>
            <Typography className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>
                Products
            </Typography>
            <ul className={isMobile ? "space-y-1 text-gray-600 text-sm" : "space-y-2 text-gray-600"}>
                <li>Cards</li>
                <li>Mugs</li>
                <li>Paintings</li>
                <li>Toys</li>
            </ul>
        </>
    );

    const middleColumn = (
        <>
            <Typography className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>&nbsp;</Typography>
            <ul className={isMobile ? "space-y-1 text-gray-600 text-sm" : "space-y-2 text-gray-600"}>
                <li>Jewelry</li>
                <li>Textiles</li>
                <li>Decor</li>
                <li>Others</li>
            </ul>
        </>
    );

    const rightColumn = (
        <>
            <Typography className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>
                Useful Links
            </Typography>
            <ul className={isMobile ? "space-y-1 text-gray-600 text-sm" : "space-y-2 text-gray-600"}>
                <li>Shipping</li>
                <li>My Profile</li>
                <li>Deadlines</li>
                <li>Terms & Conditions</li>
            </ul>
        </>
    );

    if (isMobile) {
        return (
            <div className="flex justify-center gap-12">
                <div>{leftColumn}</div>
                <div>{middleColumn}</div>
            </div>
        );
    }

    return (
        <div className="flex justify-center gap-24 flex-1">
            <div>{leftColumn}</div>
            <div>{middleColumn}</div>
            <div>{rightColumn}</div>
        </div>
    );
}

export default FooterLink;
