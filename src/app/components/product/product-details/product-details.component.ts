import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product.interface";
import {MoneyPipe} from "../../../money.pipe";
import {InfoBtnComponent} from "../../info-btn/info-btn.component";
import {ProductImageComponent} from "../product-image/product-image.component";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true, imports: [MoneyPipe, InfoBtnComponent, ProductImageComponent, AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counts = '';

  @Input() product?: Product;

  ngOnInit() {
    this.counter$.next(0); // Initialize counter
    this.updateGrammaticalEnding()
  }

  increase() {
    this.counter$.next(this.counter$.value + 1);
  }

  decrease() {
    if (this.counter$.value > 0) {
      this.counter$.next(this.counter$.value - 1);
    }
  }

  updateGrammaticalEnding() {
    this.counter$.subscribe(value => {
      if (value % 10 === 1 && value % 100 !== 11) {
        this.counts = 'штука';
      } else if ((value % 10 === 2 || value % 10 === 3 || value % 10 === 4) && (value % 100 < 10 || value % 100 > 20)) {
        this.counts = 'штуки';
      } else {
        this.counts = 'штук';
      }
    })
  }

}
