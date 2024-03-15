import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[imageSizeClass]'
})
export class ImageSizeClassDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.listen(this.elementRef.nativeElement, 'load', () => {
      this.imageLoaded();
    });
  }
  ngOnInit(): void {
   // this.setImageSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setImageSize();
  }

  imageLoaded() {
    console.log('Image loaded');
    const imageElement = this.elementRef.nativeElement as HTMLImageElement;
    console.log(imageElement.width);
    console.log(imageElement.height);
    this.setImageSize();
    // Your logic here
  }
  setImageSize() {
    // Adjust image size based on window width
    const windowWidth = window.innerWidth;
    const imageElement = this.elementRef.nativeElement as HTMLImageElement;
    imageElement.style.paddingTop = '10px';
    let size = '200px';
    if (windowWidth < 768) {
      // Set small size
      size = '200px';
    }
    else if (windowWidth < 1000) {
      // Set small size
      size = '400px';
    } 
    else {
      // Set large size
      size = '500px';
    }
    if (imageElement.width> imageElement.height)
    {
      imageElement.style.width = size;
    }
    else {
      imageElement.style.height = size;
    }

  }
}