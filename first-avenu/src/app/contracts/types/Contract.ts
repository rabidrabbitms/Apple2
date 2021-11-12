import { Document } from "./Document";
import { Initials } from "./Initials";
import { Page } from "./Page";
import { Signature } from "./Signature";
export interface Contract {
    ID: number;
    Status: string;
    PDF: string;
    LoanRequest: {
        ID: number;
        Status: string;
        Data: {};
    };
    Value: string;
    Content: string;
    State: string;
    Type: string;
    Documents: Document[];
    Pages: Page[];
    Signatures: Signature[];
    Initials: Initials[];
}