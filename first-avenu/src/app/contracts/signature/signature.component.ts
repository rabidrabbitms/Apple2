import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";

export enum SignatureAction { View = "View", Draw = "Draw", Push = "Push" }
@Component({
    selector: "mlc-template-signature",
    templateUrl: "./signature.component.html",
    styleUrls: ["./signature.component.css"]
})
export class SignatureComponent implements OnInit {
    constructor(private hostElement: ElementRef<HTMLElement>) {
    }
    ngOnInit() {
    }
    @Output() change = new EventEmitter<SignatureComponent>();
    @ViewChild("canvas", { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

    context: CanvasRenderingContext2D | undefined | null;
    get Context() {
        if (!this.context) {
            const canvasElement = this.canvas && this.canvas.nativeElement;
            const canvasContext = canvasElement && canvasElement.getContext("2d");
            if (canvasContext)
                this.context = canvasElement.getContext("2d");
        }
        return this.context;
    }
    get Image(): string {
        const canvasElement = this.canvas.nativeElement;
        return canvasElement.toDataURL("image/png");
    }

    size = { width: 0, height: 0 };
    get Size() {
        this.size = {
            width: (this.canvas.nativeElement).getBoundingClientRect().width,
            height: (this.canvas.nativeElement).getBoundingClientRect().height
        };
        return this.size;
    }

    @Input() set Width(value) {
    }

    point: { x: number, y: number } | undefined;
    path: Array<{ x: number, y: number }> = [];
    paths: Array<Array<{ x: number, y: number }>> = [];
    points: Array<{ x: number, y: number }> = [];
    mouseDown?: MouseEvent;

    touching = false;
    drawing = false;
    clientRect?: { left: number, top: number };

    touchEvent(event: TouchEvent) {
        event.preventDefault();
        if (!this.clientRect) {
            const canvasElement = this.canvas.nativeElement;
            const temp = canvasElement.getBoundingClientRect();
            this.clientRect = { left: temp.left, top: temp.top };
        }

        switch (event.type) {
            case "touchstart":
                this.point = { x: event.targetTouches[0].pageX - this.clientRect.left, y: event.targetTouches[0].pageY - this.clientRect.top };
                this.touching = true;
                if (!this.drawing) {
                    this.drawing = true;
                    this.beginPath(this.point);
                }
                break;
            case "touchmove":
                this.point = { x: event.targetTouches[0].pageX - this.clientRect.left, y: event.targetTouches[0].pageY - this.clientRect.top };
                if (this.drawing)
                    this.stroke(this.point);
                break;
            case "touchend":
                this.touching = false;
                if (this.drawing) {
                    this.drawing = false;
                }
                break;
        }
    }
    mouseEvent(event: MouseEvent) {
        event.preventDefault();
        if (this.touching)
            return;

        if (!this.clientRect) {
            const canvasElement = this.canvas.nativeElement;
            const temp = canvasElement.getBoundingClientRect();
            this.clientRect = { left: temp.left, top: temp.top };
        }

        this.point = { x: event.offsetX, y: event.offsetY };
        switch (event.type) {
            case "mouseover":
                if (this.mouseDown) {
                    this.drawing = true;
                    this.beginPath(this.point);
                }
                break;
            case "mouseout":
                this.drawing = false;
                break;
            case "mousemove":
                if (this.drawing)
                    this.stroke(this.point);
                break;
            case "mousedown":
                this.mouseDown = event;
                this.drawing = true;
                this.beginPath(this.point);
                break;
            case "mouseup":
                this.mouseDown = undefined;
                this.drawing = false;
                break;
        }

    }
    get SignatureValid(): boolean {
        return this.points.length >= 20;
    }
    beginPath(point: { x: number, y: number }) {
        this.points.push(point);
        if (this.path.length > 0)
            this.paths.push(this.path);
        this.path = [point];
        if (this.Context) {
            this.Context.moveTo(point.x, point.y);
            this.Context.beginPath();
        }
    }
    stroke(point: { x: number, y: number }) {
        this.points.push(point);
        this.path.push(point);
        if (this.Context) {
            this.Context.lineTo(point.x, point.y);
            this.Context.stroke();
        }
    }
    clear() {
        this.point = undefined;
        this.points = [];
        this.path = [];
        this.paths = []; if (this.Context) {
            this.Context.clearRect(0, 0, this.size.width, this.size.height);
        }
    }
}