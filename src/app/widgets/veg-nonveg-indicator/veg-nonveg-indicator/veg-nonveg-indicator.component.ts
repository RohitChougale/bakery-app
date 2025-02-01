import { NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-veg-nonveg-indicator',
  templateUrl: './veg-nonveg-indicator.component.html',
  styleUrls: ['./veg-nonveg-indicator.component.scss'],
  imports:[NgClass],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VegNonvegIndicatorComponent  implements OnInit {

  type = input<string>('veg');
  constructor() { }

  ngOnInit() {
    console.log(this.type,'type')
  }

}
