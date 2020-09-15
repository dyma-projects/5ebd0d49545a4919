import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public title: string = "String interpolation"
  constructor() { }

  ngOnInit(): void {
  }

  showInConsole(el) {
    console.log(`you've clicked the element ${el.target.tagName}`)
  }

}
