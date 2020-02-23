import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  //private isClicked: boolean = false;

  // one method
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // @HostListener("click") onClick() {
  //   this.isClicked = !this.isClicked;

  //   if (this.isClicked) {
  //     this.renderer.addClass(this.elementRef.nativeElement, "open");
  //   } else {
  //     this.renderer.removeClass(this.elementRef.nativeElement, "open");
  //   }
  // }

  // second method
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") onClick() {
    this.isOpen = !this.isOpen;
  }
}
