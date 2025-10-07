// feedbacks.ts
/**
 * FeedbackItem interface
 *
 * Represents a single feedback/testimonial item.
 */
export interface FeedbackItem {
    /** Title of the feedback */
    title: string;
    /** Main text/content of the feedback */
    text: string;
    /** Image URL for the author or related visual */
    image: string;
    /** Name of the author */
    author: string;
    /** Role or position of the author */
    role: string;
}

/**
 * Array of feedback items
 */
export const feedbacks: FeedbackItem[] = [
    {
        title: "Страхотни бижута!",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
        image: "/sophia.jpg",
        author: "Sophia Moore",
        role: "CEO at Webflow Agency",
    },
    {
        title: "Перфектните подаръци!",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute iure sint amet occaecat cupidatat non proident.",
        image: "/adam.jpg",
        author: "Adam Smith",
        role: "Webflow Developer",
    },
    {
        title: "Супер качество на продукти!",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa sint amet occaecat cupidatat nor.",
        image: "/mike.jpg",
        author: "Mike Warren",
        role: "Developer at BRIX Tem",
    },
    {
        title: "Много любезно обслужване!",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa sint amet occaecat cupidatat nor.",
        image: "/john.jpg",
        author: "John Warren",
        role: "Developer at Amazon Team",
    },
];
