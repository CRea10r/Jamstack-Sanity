import { content } from "../pageType";

export interface TestimonialSection {
    title: string;
    description: string;
    content: TestimonialContent[];
}

export interface TestimonialContent {
    contentContext: content[];
    authorName: string;
    authorImage: {
        asset: {
            _id: string;
            url: string;
        };
    };
    authorAddress: string;
}