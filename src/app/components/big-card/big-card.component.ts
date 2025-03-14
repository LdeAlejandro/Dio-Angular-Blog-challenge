
import { Component, Input, OnInit, ElementRef  } from '@angular/core';
import { TypingService } from 'src/app/services/typing.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription:string = "";
  @Input()
  Id:string = "0";


  constructor(private typingService: TypingService, private el: ElementRef) { 

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //typing animation logic
    const elementTitle = this.el.nativeElement.querySelector('.big-card__title h1');
    this.typingService.typeText(elementTitle, this.cardTitle, 50);

    const elementDescription = this.el.nativeElement.querySelector('.big-card__description p');
    this.typingService.typeText(elementDescription, this.cardDescription, 5);
    
  }

}
