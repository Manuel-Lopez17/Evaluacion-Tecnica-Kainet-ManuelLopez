import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PostUsuario } from './interfaces/usuarios.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    private apiUrl = environment.API_URL;


    constructor(private http: HttpClient) { }

    getUsuario(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + '/usuarios')
    }

    postUsuario(body: PostUsuario) {
        console.log(body);
        return this.http.post<any>(this.apiUrl + '/usuarios', body, { observe: 'response' })
    }
}
