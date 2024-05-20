import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios/usuarios.service';
import { UserFormsComponent } from './components/user-forms/user-forms.component';

@Component({
    selector: 'app-page-two',
    standalone: true,
    imports: [UserFormsComponent],
    templateUrl: './page-two.component.html',
    styleUrl: './page-two.component.scss'
})
export class PageTwoComponent {


}
