import { content } from "../pageType";

export interface DropDownItem {
    dropDownItemName: string;
    dropDownItemNameSlug: {
        current: string;
    };
    dropDownItemContext: content[];
    dropDownItemImage?: {
      asset: {
        _id: string;
        url: string;
      };
    };
    dropDownItemFeatures: content[];
    tableContentField?: {
      fieldName: string;
      fieldValue: string;
  }[];
  }
  
  export interface CompareSectionContent {
    contentName: string;
    contentContext: string;
    dropDownList: DropDownItem[]; 
    buttonText: string;
  }
  
  export interface CompareSection {
    _type: "compareSection";
    title: string;
    description: string;
    tableContent:string[];
    content: CompareSectionContent[];
  }
  