import { Product } from './../model/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:8080/api/product';
  constructor(private http: HttpClient) {}
  addProduct(data: any) {
    return this.http.post<Product>(this.baseUrl, data);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(product: Product) {
    return this.http.get(this.baseUrl + `/${product.id}`);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(this.baseUrl + '/' + product.id, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete(this.baseUrl + `/${product.id}`);
  }
}
