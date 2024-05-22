import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Posiciones } from '../../page-one/interfaces/posiciones.interface'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.API_URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/')
  }

  getTest(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/test')
  }

  getPosiciones(
    page: number = 1,
    perPage: number = 10,
    order: 'desc' | 'asc' = 'desc',
  ): Observable<Posiciones> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString())
      .set('order', order)
    return this.http.get<Posiciones>(this.apiUrl + '/posiciones', { params })
  }
}
