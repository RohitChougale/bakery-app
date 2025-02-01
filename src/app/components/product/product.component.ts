import { addIcons } from 'ionicons';
import { Products } from 'src/app/interfaces/products-config.interface';
import { Component, input, OnInit } from '@angular/core';
import { Strings } from 'src/app/enums/strings';
import { IonCard, IonThumbnail, IonImg, IonLabel, IonItem, IonText, IonIcon } from '@ionic/angular/standalone';
import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { heart, star } from 'ionicons/icons';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports:[IonCard, IonThumbnail, IonImg, IonLabel,IonItem,IonText, VegNonvegIndicatorComponent,IonIcon,RouterLink]
})
export class ProductComponent  implements OnInit {

  item = input<Products>();
  currency =Strings.currency;
  constructor() {

  addIcons({
    star,heart
  })
}

  ngOnInit() {}

}
