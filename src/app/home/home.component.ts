import { Component, inject } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mainService: MainService = inject(MainService);
}
