import { Document } from "./Document";
import { Initials } from "./Initials";
import { Signature } from "./Signature";
export interface Page {
    Number: number;
    Content: string;
    Value: string;
    Document: Document;
    Signatures: Signature[];
    Initials: Initials[];
}
