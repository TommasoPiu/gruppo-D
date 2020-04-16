import { Directive, Input, ViewContainerRef, TemplateRef, SimpleChanges, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appNewNgFor][appNewNgForOf]'
})
export class NewNgForDirective implements OnChanges, OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input() appNewNgForOf: [];

  constructor(private templateRef: TemplateRef<any>, public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    console.log('direttiva');
    this.refreshTemplate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.refreshTemplate();
    }
  }


  refreshTemplate(): void {
    this.viewContainerRef.remove();

    this.appNewNgForOf.forEach((ogg, index) => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: ogg, index} );
    });

    console.log('ogg');
  }

}
