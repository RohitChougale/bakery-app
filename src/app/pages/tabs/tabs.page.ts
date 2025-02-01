import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import {home, location, heart, chatboxEllipses, person } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonTabButton, IonTabBar, IonTab, IonTabs, ]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({home,location,heart,chatboxEllipses,person});
  }

  ngOnInit() {
  }


}
