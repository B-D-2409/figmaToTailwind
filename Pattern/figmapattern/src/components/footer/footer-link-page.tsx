import { Typography } from "../shared/typography";

interface FooterLinksProps {
    /** If true, renders a mobile-friendly layout with fewer columns */
    isMobile?: boolean;
}

function FooterLink({ isMobile }: FooterLinksProps) {
    const leftColumn = (
        <>
            <Typography className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>
                Продукти
            </Typography>
            <ul className={isMobile ? "space-y-1 text-gray-600 text-sm" : "space-y-2 text-gray-600"}>
                <li>Картички</li>
                <li>Чаши</li>
                <li>Картини</li>
                <li>Играчки</li>
            </ul>
        </>
    );

    const middleColumn = (
        <>
            <Typography className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>&nbsp;</Typography>
            <ul className={isMobile ? "space-y-1 text-gray-600 text-sm" : "space-y-2 text-gray-600"}>
                <li>Бижута</li>
                <li>Текстили</li>
                <li>Декорации</li>
                <li>Други</li>
            </ul>
        </>
    );

    const rightColumn = (
        <>
            <Typography className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>
                Полезни линкове
            </Typography>
            <ul className={isMobile ? "space-y-1 text-gray-600 text-sm" : "space-y-2 text-gray-600"}>
                <li>Доставка</li>
                <li>Моят профил</li>
                <li>Срокове</li>
                <li>Общи условия</li>
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
