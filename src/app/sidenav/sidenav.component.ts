import { Component, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatNavList,
    MatSidenav,
    MatListItem,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
