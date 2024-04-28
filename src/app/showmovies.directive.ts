import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowmovies]'
})
export class ShowmoviesDirective {

  // showMovies: boolean = true;
  @Input() set appShowmovies(condition: boolean) {
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }
  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }
}
