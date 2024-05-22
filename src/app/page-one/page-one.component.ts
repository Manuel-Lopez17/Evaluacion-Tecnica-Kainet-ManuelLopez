import { Component } from '@angular/core'
import { DataService } from '../services/posiciones/data.service'
import { Posicion, Posiciones } from './interfaces/posiciones.interface'
import { AsyncPipe, DatePipe } from '@angular/common'

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.scss',
})
export class PageOneComponent {
  posiciones: Posicion[] = []
  paginatedData: any[] = []
  pageSize: number = 5
  currentPage: number = 1
  order: 'desc' | 'asc' = 'desc'
  totalPages!: number

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData(this.currentPage, this.pageSize, this.order)
  }

  getData(currentPage: number, pageSize: number, order: 'desc' | 'asc') {
    this.dataService
      .getPosiciones(currentPage, pageSize, order)
      .subscribe((res: Posiciones) => {
        this.posiciones = res.posiciones.map((x) => x)
        this.totalPages = Math.ceil(res.total / this.pageSize)
      })
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page
      this.getData(this.currentPage, this.pageSize, this.order)
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++
      this.getData(this.currentPage, this.pageSize, this.order)
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--
      this.getData(this.currentPage, this.pageSize, this.order)
    }
  }
}
