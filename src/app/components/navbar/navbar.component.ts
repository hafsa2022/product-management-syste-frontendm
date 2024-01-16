import { Product } from './../../model/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // products!: FormGroup;
  product: Product;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    // this.products = this.fb.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    //   type: '',
    //   product_size: '',
    //   prix: '',
    //   stock_quantity: '',
    // });
  }

  // get productsInfo() {
  //   return this.products.controls;
  // }

  add() {
    // const formData = new FormData();
    // formData.append('name', this.products.get('name')?.value);
    // formData.append('description', this.products.get('description')?.value);
    // formData.append('prix', this.products.get('prix')?.value);
    // formData.append('product_size', this.products.get('product_size')?.value);
    // formData.append('type', this.products.get('type')?.value);
    // formData.append(
    //   'stock_quantity',
    //   this.products.get('stock_quantity')?.value
    // );
    // let data = {
    //   name: this.products.get('name')?.value,
    //   description: this.products.get('description')?.value,
    //   prix: this.products.get('prix')?.value,
    //   product_size: this.products.get('product_size')?.value,
    //   type: this.products.get('type')?.value,
    //   stock_quantity: this.products.get('stock_quantity')?.value,
    // };
    this.productService.addProduct(this.product).subscribe((data) => {
      this.toastr.success('this product was created successfully!', '', {
        timeOut: 3000,
        progressBar: true,
      });
      window.location.reload();
    });
  }
}
