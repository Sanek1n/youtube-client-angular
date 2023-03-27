import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appMarked]',
})
export default class MarkDirective implements OnInit {
  @Input() dateCard = '';

  colorMark: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.colorMark = '#2F80ED';
  }

  ngOnInit(): void {
    const dayPost = (Date.now() - (new Date(this.dateCard)).getTime()) / 1000 / 3600 / 24;

    if (dayPost > 7 && dayPost < 30) {
      this.colorMark = '#27AE60';
    } else if (dayPost >= 30 && dayPost < 180) {
      this.colorMark = '#F2C94C';
    } else if (dayPost >= 180) {
      this.colorMark = '#EB5757';
    }

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.colorMark,
    );
  }
}
