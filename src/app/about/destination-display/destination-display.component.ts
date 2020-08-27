import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-display',
  templateUrl: './destination-display.component.html',
  styleUrls: ['./destination-display.component.css']
})
export class DestinationDisplayComponent implements OnInit {
  cards = [
    {
      image: "https://picsum.photos/seed/goo/600/500",
      text: "Lorem ipsum su it damet su crop coop",
    },
    {
      image: "https://picsum.photos/seed/poo/600/500",
      text: "Flim flam blim blam creep eep freep",
    },
    {
      image: "https://picsum.photos/seed/crew/600/500",
      text: "Eeep creeep screep beep flep po ass poo",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
