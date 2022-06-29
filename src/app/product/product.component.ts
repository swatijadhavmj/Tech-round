import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ngOnInit(): void {
  }
  costList: any = [
    {
      costAmount: "€ 0.000.000,00",
      CostDesc: "lorem ipsum dolor sit amet",
    },
    {
      costAmount: "€ 0.000.000,00",
      CostDesc: "lorem ipsum dolor sit amet",
    }

  ]
  productList: any = [
    {
      productIcon: "fas fa-edit",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-redo",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-briefcase",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-building",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-globe",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-list-ul",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-cogs",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-users",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-chart-line",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-euro-sign",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-globe",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      productIcon: "fas fa-list-ul",
      productName: "Lorem Ipsum",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },

  ]
  constructor(private renderer: Renderer2) {

  }

  changeTheme(type: string) {
    if (type === 'dark') {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }

  }

}
