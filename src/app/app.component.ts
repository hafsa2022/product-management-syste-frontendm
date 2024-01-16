import { Product } from './model/Product';
import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  error = '';
  product: Product;
  deleteProduct: Product;
  selectedProduct: Product;
  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {
    this.product = new Product();
    this.deleteProduct = new Product();
    this.selectedProduct = new Product();
  }
  ngOnInit(): void {
    this.products = [];
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => {
        this.handelError(err);
      }
    );
  }

  handelError(error: any) {
    this.error = error.error.error;
    console.log(this.error);
  }

  call1(editedProduct: Product) {
    this.product = editedProduct;
  }

  edit() {
    this.productService.updateProduct(this.product).subscribe((res) => {
      this.toastr.success('this product was updated successfully!', '', {
        timeOut: 3000,
        progressBar: true,
      });
      window.location.reload();
    });
  }

  call2(deletedProduct: Product) {
    this.deleteProduct = deletedProduct;
  }

  delete() {
    this.productService.deleteProduct(this.deleteProduct).subscribe((res) => {
      this.toastr.success('this product was deleted successfully!', '', {
        timeOut: 3000,
        progressBar: true,
      });
      window.location.reload();
    });
  }

  call3(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
  }
}
