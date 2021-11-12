import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild } from "@angular/core";
import { Drag } from "../types/Drag";
import { Initials } from "../types/Initials";
import { Page } from "../types/Page";
import { Signature } from "../types/Signature";
import { PageInitialsComponent } from "./initials/initials.component";
import { PageSignatureComponent } from "./signature/signature.component";

@Component({
    selector: "mlc-template-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.css"]
})
export class PageComponent implements AfterViewInit {
    constructor(public hostElement: ElementRef<HTMLElement>) { }

    get IncompleteSignatures(): PageSignatureComponent[] {
        return this.Signatures.filter(signature => (!(signature.Signature && signature.Signature.Image) && !signature.Skip));
    }
    get IncompleteInitials(): PageInitialsComponent[] {
        return this.Initials.filter(initials => !initials.Initials.Image);
    }

    @Output() signatureApplied = new EventEmitter<Signature>();
    @Output() initialsApplied = new EventEmitter<Initials>();

    ngAfterViewInit() {
        setTimeout(() => {
            this.initSignatures();
        }, 0);

        this.Signatures.changes.subscribe(_ => {
            this.initSignatures();
        });
        this.Initials.changes.subscribe(_ => {
            this.initSignatures();
        });
    }

    initSignatures() {
        this.Signatures.forEach(signature => {
            if (!signature.Name) return;
            const domSignature = this.getDOMSignature(signature.Name);
            signature.size = { width: domSignature.width, height: domSignature.height };
            signature.location = { x: domSignature.x, y: domSignature.y };
            if (signature && signature.Signature && signature.Signature.Image) {
                this.applySignature(signature.Signature, signature.Signature.Image);
            }
        });
        this.Initials.forEach(initials => {
            const domInitials = this.getDOMInitials(initials.Name);
            initials.size = { width: domInitials.width, height: domInitials.height };
            initials.location = { x: domInitials.x, y: domInitials.y };
            if (initials && initials.Initials && initials.Initials.Image)
                this.applySignature(initials.Initials, initials.Initials.Image);
        });
    }

    getDOMSignature(name: string): { element: Element | undefined, width: number, height: number, x: number, y: number } {
        const signatureElement = this.Container.nativeElement.querySelector(`[signature=${name}]`);
        if (!signatureElement)
            return {
                element: undefined,
                width: 0,
                height: 0,
                x: 0,
                y: 0
            };
        const signatureElementRect = signatureElement && signatureElement.getBoundingClientRect();
        const element = this.hostElement.nativeElement;
        const hostElementRect = element.getBoundingClientRect();
        if (!signatureElement || !signatureElementRect) throw Error('invalid');
        const result = {
            element: signatureElement,
            width: signatureElementRect.width,
            height: signatureElementRect.height,
            x: signatureElementRect.left,
            y: signatureElementRect.top
        };
        return result;
    }
    getDOMInitials(name: string): { element: Element | undefined, width: number, height: number, x: number, y: number } {
        const initialsElement = this.Container.nativeElement.querySelector(`[initials=${name}]`);
        if (!initialsElement)
            return {
                element: undefined,
                width: 0,
                height: 0,
                x: 0,
                y: 0
            };
        const initialsElementRect = initialsElement && initialsElement.getBoundingClientRect();
        const hostElementRect = this.hostElement.nativeElement.getBoundingClientRect();
        if (!initialsElement || !initialsElementRect) throw Error('invalid');
        const result = {
            element: initialsElement,
            width: initialsElementRect.width,
            height: initialsElementRect.height,
            x: initialsElementRect.left,
            y: initialsElementRect.top
        };
        return result;
    }

    @Output() drag = new EventEmitter<Drag>();
    @Output() dragged = new EventEmitter<Drag>();
    @Output() select = new EventEmitter<PageComponent>();

    page!: Page;
    get Page() { return this.page; }
    @Input() set Page(value) {
        this.page = value;
        this.Container.nativeElement.innerHTML = this.page.Content;
        this.Signatures.notifyOnChanges();
        this.Initials.notifyOnChanges();
    }
    selected = false;
    get Selected() { return this.selected; }
    set Selected(value) {
        this.selected = value;
        if (this.selected) {
            this.Signatures.forEach(signature => {
                signature.zIndex = "1000";
            });
            this.Initials.forEach(initials => {
                initials.zIndex = "1000";
            });
            this.select.emit(this);
        }
        else {
            this.Signatures.forEach(signature => {
                signature.zIndex = "0";
            });
            this.Initials.forEach(initials => {
                initials.zIndex = "0";
            });
        }
    }

    @ViewChild("content", { static: true }) Content!: { nativeElement: HTMLDivElement };
    @ViewChild("container", { static: true }) Container!: { nativeElement: Overwrite<HTMLDivElement, 'querySelector', (selectors: string) => HTMLElement | null> };
    @ContentChildren(PageSignatureComponent) Signatures = new QueryList<PageSignatureComponent>();
    @ContentChildren(PageInitialsComponent) Initials = new QueryList<PageInitialsComponent>();

    get size(): { width: number, height: number } {
        const element = this.hostElement.nativeElement;
        const styles = window.getComputedStyle(element);
        const result = { width: 0, height: 0 };
        if (styles) {
            if (styles.width) {
                result.width = Number(styles.width.replace(/px$/, ""));
            }
            if (styles.height) {
                result.height = Number(styles.height.replace(/px$/, ""));
            }
        }
        return result;
    }
    get margin(): { top: number, right: number, bottom: number, left: number } {
        const element = this.hostElement.nativeElement;
        const styles = window.getComputedStyle(element);
        const result = { top: 0, right: 0, bottom: 0, left: 0 };
        if (styles) {
            if (styles.marginTop)
                result.top = Number(styles.marginTop.replace(/px$/, ""));
            if (styles.marginRight)
                result.right = Number(styles.marginRight.replace(/px$/, ""));
            if (styles.marginBottom)
                result.bottom = Number(styles.marginBottom.replace(/px$/, ""));
            if (styles.marginLeft)
                result.left = Number(styles.marginLeft.replace(/px$/, ""));
        }
        return result;
    }
    get location() {
        const element = this.hostElement.nativeElement;
        const parentElement = element.parentElement;
        const result = { x: 0, y: 0 };
        if (parentElement) {
            const parentRect = parentElement.getBoundingClientRect();
            const rect = element.getBoundingClientRect();
            result.x = rect.left - parentRect.left;
            result.y = rect.top - parentRect.top;
        }
        return result;
    }

    removeSignature(signature) {
        if (signature) {
            let signatureElement = this.Container.nativeElement.querySelector(`[signature=${signature.Name}]`);
            if (!signatureElement)
                signatureElement = this.Container.nativeElement.querySelector(`[initials=${signature.Name}]`);

            if (signatureElement)
                signatureElement.style.backgroundImage = ``;
            const dateElement = this.Container.nativeElement.querySelector(`[signaturedate=${signature.Name}]`);
            if (dateElement)
                dateElement.innerText = ``;
        }
        if (signature.Initials) {

        }
    }
    applySignature(signature: Signature, image: string) {
        signature.Image = image;
        signature.Date = new Date();

        const signatureElement = this.Container.nativeElement.querySelector(`[signature=${signature.Name}]`);
        if (signatureElement) {
            signatureElement.style.backgroundImage = `url('${image}')`;
            signatureElement.style.backgroundRepeat = "no-repeat";
            signatureElement.style.backgroundSize = "contain";
        }
        const dateElement = this.Container.nativeElement.querySelector(`[signaturedate=${signature.Name}]`);
        if (dateElement)
            dateElement.innerText = `${signature.Date.getMonth() + 1}\\${signature.Date.getDate()}\\${signature.Date.getFullYear()}`;

        this.signatureApplied.emit(signature);
    }
    applyInitials(initials: Initials, image: string) {
        initials.Image = image;
        initials.Date = new Date();

        const initialsElement = this.Container.nativeElement.querySelector(`[initials=${initials.Name}]`);
        if (initialsElement) {
            initialsElement.style.backgroundImage = `url('${image}')`;
            initialsElement.style.backgroundRepeat = "no-repeat";
            initialsElement.style.backgroundSize = "contain";
        }
        this.initialsApplied.emit(initials);
    }

    mouseState: { date?: Date, drag: boolean, y: number } = { drag: false, y: 0 };
    mouseEvent(event: MouseEvent) {
        switch (event.type) {
            case "mousedown":
                this.mouseState = { date: new Date(), drag: true, y: event.y };
                break;
            case "mousemove":
                if (this.mouseState.drag) {
                    this.drag.emit({ x: 0, y: event.y - this.mouseState.y });
                    this.mouseState = { date: new Date(), drag: true, y: event.y };
                }
                break;
            case "mouseup":
                if (this.mouseState.drag) {
                    this.dragged.emit({ x: 0, y: event.y - this.mouseState.y });
                    this.mouseState = { date: new Date(), drag: false, y: 0 };
                }
                break;
        }
    }

    scroll = { x: 0, y: 0 };
    get Scroll() { return this.scroll; }
    set Scroll(value) {
        this.Content.nativeElement.style.top = `${value.y}px`;
        this.scroll.y = value.y;
    }
}
