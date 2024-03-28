import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {InfoBtnComponent} from "../info-btn/info-btn.component";
import {AppService} from "../../app.service";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {AsyncPipe} from "@angular/common";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, InfoBtnComponent, AsyncPipe, ProductDetailsComponent, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product$: Observable<Product>;

  constructor(private service: AppService) {
    this.product$ = this.service.getProduct();
  }
}
