import {Component} from '@angular/core';
import {InfoBtnComponent} from "../info-btn/info-btn.component";
import {AppService} from "../../app.service";
import {Profile} from "../../interfaces/profile.interface";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MoneyPipe} from "../../money.pipe";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InfoBtnComponent, AsyncPipe, MoneyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profile$: Observable<Profile>;

  constructor(private service: AppService) {
    this.profile$ = this.service.getProfile()
  }
}
