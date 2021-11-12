import { Page } from "./Page";
export interface Signature {
    Name: string;
    Optional: boolean;
    Value: string;
    Content: string;
    Image: string;
    Size: {
        width: number;
        height: number;
    };
    Date: Date;
    Page: Page;
}