import { Component } from '@angular/core';
import { UserService } from '../services/usuarios/user.service';
import { UserFormsComponent } from './components/user-forms/user-forms.component';
import { User } from './interfaces/usuario.interface';

@Component({
    selector: 'app-page-two',
    standalone: true,
    imports: [UserFormsComponent],
    templateUrl: './page-two.component.html',
    styleUrl: './page-two.component.scss'
})
export class PageTwoComponent {

    users: User[] = []

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUsuario().subscribe(
            res => {
                this.users = res.map(u => u)
            }
        )

    }
    updateTableFromPost(user: any) {
        this.users.push(user[0])
    }
}
