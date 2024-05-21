import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PostUsuario } from './interfaces/usuarios.interface';
import { Observable } from 'rxjs';
import { User } from '../../page-two/interfaces/usuario.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = environment.API_URL;


    constructor(private http: HttpClient) { }

    getUsuario(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl + '/usuarios')
    }

    postUsuario(body: PostUsuario) {
        console.log(body);
        return this.http.post<User>(this.apiUrl + '/usuarios', body, { observe: 'response' })
    }
}
