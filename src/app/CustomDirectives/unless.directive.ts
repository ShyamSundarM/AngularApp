import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{

  @Input() appUnless:boolean=false;
  constructor(private temRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }

  ngOnInit() {
    if(!this.appUnless){
      this.vcRef.createEmbeddedView(this.temRef);
    }else{
      this.vcRef.clear();
    }
  }
}
