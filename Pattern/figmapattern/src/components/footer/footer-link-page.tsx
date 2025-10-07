// components/Footer/FooterMiddle.tsx
interface FooterMiddleProps {
    isMobile?: boolean;
}

function FooterLink({ isMobile }: FooterMiddleProps) {
    const leftColumn = (
        <>
            <h3 className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>Продукти</h3>
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
            <h3 className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>&nbsp;</h3>
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
            <h3 className={isMobile ? "text-base font-semibold mb-3" : "text-lg font-semibold mb-4"}>Полезни линкове</h3>
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
