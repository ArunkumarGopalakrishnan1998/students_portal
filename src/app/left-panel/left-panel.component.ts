import { Component, inject } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {

  mainService: MainService = inject(MainService);
  
}
