import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { TypingService } from 'src/app/services/typing.service';
@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  constructor(private typingService: TypingService, private el: ElementRef) { }

  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  Id:string = "0";
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //typing animation logic
    const elementTitle = this.el.nativeElement.querySelector('a');
    this.typingService.typeText(elementTitle, this.cardTitle, 100);
    
  }

  isVideo(): boolean { // to check if the photoCover is a video to use video or img tag
    return this.photoCover.endsWith('.mp4');
  }

}
