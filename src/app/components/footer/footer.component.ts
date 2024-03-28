import { Component } from '@angular/core';
import {InfoBtnComponent} from "../info-btn/info-btn.component";

@Component({
  selector: 'app-footer',
  standalone: true, imports: [InfoBtnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
