import { Component, OnInit } from '@angular/core';
import { CommerceClientService } from 'src/app/services/commerce-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor( private commerce: CommerceClientService) { }



  public products: any = [];

  async loadProducts() {
    try {
      const { data: products} = await this.commerce.client.products.list();
      this.products = products;
    }catch(e){
      console.error(e);
    }
  }
  onBuyNowButtonTouched(product: any) {
    window.open(product.checkout_url.checkout, '__target');
  }

  ngOnInit() {
    this.loadProducts();
  }

}
