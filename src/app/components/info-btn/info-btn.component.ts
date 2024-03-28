import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-info-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './info-btn.component.html',
  styleUrl: './info-btn.component.scss'
})
export class InfoBtnComponent {
  @Input() primary = false;
  @Input() btnClass = '';
}
