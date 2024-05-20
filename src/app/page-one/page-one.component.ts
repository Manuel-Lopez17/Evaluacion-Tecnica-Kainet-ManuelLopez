import { Component } from '@angular/core';
import { Product } from './interfaces/product.interface';

@Component({
    selector: 'app-page-one',
    standalone: true,
    imports: [],
    templateUrl: './page-one.component.html',
    styleUrl: './page-one.component.scss'
})
export class PageOneComponent {
    products: Product[] = [
        { companyName: 'Company A', productName: 'Product 1', availabilityDate: '2024-06-01', price: 100, currency: 'USD' },
        { companyName: 'Company B', productName: 'Product 2', availabilityDate: '2024-07-15', price: 200, currency: 'EUR' },
        // Add more products as needed
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
