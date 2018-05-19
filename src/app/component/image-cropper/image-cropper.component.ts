import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
  @ViewChild('canvas') canvasRef: ElementRef;
  @Input() width: number;
  @Input() height: number;

  private image = null;
  private isDragging = false;
  private lastY: number;
  private lastX: number;
  private offsetX: number;
  private offsetY: number;
  private scale: number;

  constructor() { }

  ngOnInit() {
  }

  SetImage(img) {
    let canvas = this.canvasRef.nativeElement;
    this.image = img;
    this.scale = img.width/canvas.width;
    this.offsetX = 0;
    this.offsetY = (img.height - img.width/canvas.width*canvas.height) / 2; /* 设置图片高度偏移，使图片居中 */
    this.update(0, 0);
    console.debug("SetImage", img);
  }

  update(deltaX: number, deltaY: number) {
    if(this.image == null){
      return;
    }
    let img = this.image;
    let canvas = this.canvasRef.nativeElement;
    let ctx = canvas.getContext('2d');
    let scale = this.scale;
    let imgWidth = img.width;
    let imgHeight = img.height;
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    this.offsetX -= deltaX;
    this.offsetY -= deltaY;
    let maxOffsetX = imgWidth - canvasWidth*scale;
    let maxOffsetY = imgHeight - canvasHeight*scale;
    if(this.offsetX > maxOffsetX){
      this.offsetX = maxOffsetX;
    }
    if (this.offsetX<0){
      this.offsetX = 0;
    }
    if(this.offsetY> maxOffsetY){
      this.offsetY = maxOffsetY;
    }
    if (this.offsetY<0) {
      this.offsetY=0;
    }
    console.log(maxOffsetX, maxOffsetY);
    console.debug(this.offsetX, this.offsetY);
    ctx.drawImage(img, this.offsetX, this.offsetY, canvasWidth*scale, canvasHeight*scale,     // source rectangle
                       0, 0, canvasWidth, canvasHeight); // destination rectangle
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e) {
    if(this.image == null){
      return;
    }
    this.isDragging = true;
    this.lastY = e.clientY;
    this.lastX = e.clientX;
  }

  @HostListener("document:mousemove", ['$event'])
  onMouseMove(e) {
    if(!this.isDragging){
      return;
    }
    let deltaX = e.clientX - this.lastX;
    let deltaY = e.clientY - this.lastY;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.update(deltaX, deltaY);
  }

  @HostListener("document:mouseup", ['$event'])
  onMouseUp(e) {
    this.isDragging = false;
  }

  SetScale(s) {
    if(this.image==null){
      return;
    }
    let canvas = this.canvasRef.nativeElement;
    let img = this.image;
    let defaultScale = img.width/canvas.width;
    let newScale = defaultScale / s;
    let deltaX = canvas.width * (newScale - this.scale) / 2;
    let deltaY = canvas.height * (newScale - this.scale) / 2;
    this.scale = newScale;
    this.update(deltaX, deltaY);
  }

  GetImageData() {
    let canvas = this.canvasRef.nativeElement;
    return canvas.toDataURL();
  }

}
