import { Component, OnInit, Input, ChangeDetectorRef, forwardRef, Inject, ElementRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DOCUMENT } from "@angular/platform-browser";

export const CONTENT_VIEWER_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ContentViewerComponent),
    multi: true
};

const noop = () => {
};


@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.scss'],
  providers: [CONTENT_VIEWER_CONTROL_VALUE_ACCESSOR],
})
export class ContentViewerComponent implements OnInit {

  @Input() excerpt:string;
  @Input() content:string;
  @Input() scrollable:boolean = false;
  @Input() fontSize:string = "15";

  public showFullContent:boolean = false;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  private el: HTMLElement;
  private originalOffsetTop: number = 0;

  constructor( @Inject(DOCUMENT) private document: any, el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
  }
  //From ControlValueAccessor interface
  writeValue(value: boolean) {
    if(this.scrollable&&this.showFullContent&&!value){
      setTimeout(()=>{
        window.scrollTo({
          top: this.originalOffsetTop,
          behavior: 'instant',
        });
      });
      console.debug("offset", this.originalOffsetTop);
    }
    this.showFullContent = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  showContent() {
    this.showFullContent = true;
    this.onChangeCallback(true);
    this.originalOffsetTop = $(window).scrollTop();
  }

  showExcerpt() {
    this.showFullContent = false;
    this.onChangeCallback(false);
  }

}
