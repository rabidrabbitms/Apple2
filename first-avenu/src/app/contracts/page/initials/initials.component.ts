import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { Initials } from "../../types/Initials";

@Component({
    selector: "mlc-template-page-initials",
    templateUrl: "./initials.component.html",
    styleUrls: ["./initials.component.css"]
})
export class PageInitialsComponent implements OnInit {
    ngOnInit(): void {
    }
    constructor(private hostElement: ElementRef<HTMLElement>) {
    }

    initials!: Initials;
    get Initials() { return this.initials; }
    @Input() set Initials(value) { this.initials = value; }
    get Name() { return this.initials.Name; }

    Skip = false;

    set zIndex(value: string | null) { this.hostElement.nativeElement.style.zIndex = value; }
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
