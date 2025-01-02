export interface CompareSectionContent {
    contentName: string;
    contentContext: string;
    dropDownList: string[];
    buttonText: string;
}

export interface CompareSection {
    _type: "compareSection";
    title: string;
    description: string;
    content: CompareSectionContent[];
}