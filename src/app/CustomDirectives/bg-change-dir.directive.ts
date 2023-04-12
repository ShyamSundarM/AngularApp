import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBgChangeDir]'
})
export class BgChangeDirDirective implements OnInit{

  constructor(private ele:ElementRef,private renderer:Renderer2) { }
  @HostBinding('style.backgroundColor') bgColor:string = 'transparent';
  @Input() defaultColor:string = 'transparent';
  @Input('appBgChangeDir') highLightColor:string = 'blue';

  ngOnInit(){
    //this.renderer.setStyle(this.ele.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') onMouseEnter(){
    //this.renderer.setStyle(this.ele.nativeElement,'background-color','blue');
    this.bgColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.renderer.setStyle(this.ele.nativeElement,'background-color','transparent');
    this.bgColor = this.defaultColor;
  }

}
