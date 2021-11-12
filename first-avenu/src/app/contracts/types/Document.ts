import { Contract } from "./Contract";
import { Initials } from "./Initials";
import { Page } from "./Page";
import { Signature } from "./Signature";

export interface Document {
    State: string;
    Name: string;
    Status: string;
    Content: string;
    Value: string;
    Contract: Contract;
    Pages: Page[];
    Signatures: Signature[];
    Initials: Initials[];
}
