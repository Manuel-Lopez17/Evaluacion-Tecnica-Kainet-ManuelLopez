import { Component } from '@angular/core';
import { DataService } from '../services/posiciones/data.service';
import { Posicion, Posiciones } from './interfaces/posiciones.interface';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-page-one',
    standalone: true,
    imports: [DatePipe, AsyncPipe],
    templateUrl: './page-one.component.html',
    styleUrl: './page-one.component.scss'
})
export class PageOneComponent {
    posiciones: Posicion[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getPosiciones(1, 10, 'desc').subscribe((res: Posiciones) => {
            this.posiciones = res.posiciones.map(x => x)
        })
    }

}
