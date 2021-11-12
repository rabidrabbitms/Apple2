import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { Signature } from "../../types/Signature";

@Component({
    selector: "mlc-template-page-signature",
    templateUrl: "./signature.component.html",
    styleUrls: ["./signature.component.css"]
})
export class PageSignatureComponent implements OnInit {
    ngOnInit(): void {
    }
    constructor(private hostElement: ElementRef<HTMLElement>) {
    }
    get ID() {
        if (this.Signature)
            return `${this.Signature.Page.Document.Name}-${this.Signature.Name}`;
        return "n/a";
    }
    signature: Signature | undefined;
    get Signature() { return this.signature; }
    @Input() set Signature(value) {
        this.signature = value;
    }
    get Name() { return this.signature && this.signature.Name; }

    Skip = false;

    set zIndex(value: string | null) { this.hostElement.nativeElement.style.zIndex = value || ''; }
    get size() {
        const element = this.hostElement.nativeElement;
        const result = { width: 0, height: 0 };
        if (element.style.width)
            result.width = parseInt(element.style.width.replace(/px$/, ""), 10);
        if (element.style.height)
            result.height = parseInt(element.style.height.replace(/px$/, ""), 10);
        return result;
    }
    set size(value) {
        const element = this.hostElement.nativeElement;
        element.style.width = `${value.width}px`;
        element.style.height = `${value.height}px`;
    }
    get location() {
        const element = this.hostElement.nativeElement;
        const result = { x: 0, y: 0 };
        if (element.style) {
            if (element.style.left) {
                result.x = parseInt(element.style.left.replace(/px$/, ""), 10);
            }
            if (element.style.top) {
                result.y = parseInt(element.style.top.replace(/px$/, ""), 10);
            }
        }
        return result;
    }
    set location(value) {
        const element = this.hostElement.nativeElement;
        element.style.left = `${value.x}px`;
        element.style.top = `${value.y}px`;
    }
}
