import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ImageCropperComponent } from 'app/component/image-cropper/image-cropper.component';

@Component({
  selector: 'app-cover-editor',
  templateUrl: './cover-editor.component.html',
  styleUrls: ['./cover-editor.component.scss']
})
export class CoverEditorComponent implements OnInit {
  @ViewChild('imageCropper') imageCropper: ImageCropperComponent;
  @Output() cancel = new EventEmitter<any>();
  @Output() save = new EventEmitter<any>();
  scaleValue = 1.0;

  constructor() { }

  ngOnInit() {
  }

  SetImage(img){
    this.imageCropper.SetImage(img);
    this.scaleValue = 1.0;
  }

  onScaleChanged(e){
    let scale = e.value;
    this.imageCropper.SetScale(scale);
    console.debug("scale", scale);
  }

  onSave(){
    let img = this.imageCropper.GetImageData();
    this.save.emit(img);
  }

  onCancel(){
    this.cancel.emit(true);
  }
}
