import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';

@Component({
    selector: 'app-user-forms',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './user-forms.component.html',
    styleUrl: './user-forms.component.scss'
})
export class UserFormsComponent {
    contactForm!: FormGroup;
    isOpen: boolean = false;

    constructor(
        private fb: FormBuilder,
        private userService: UsuariosService
    ) {
        this.createContactForm();
    }

    createContactForm() {
        this.contactForm = this.fb.group({
            nombre: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            habilitado: [true]
        });
    }

    onSubmit() {
        console.log(this.contactForm.value);
        this.userService.postUsuario(this.contactForm.value)
            .subscribe(res => {
                console.log(res);
                if (res.status === 201) {
                    this.contactForm.reset();
                    this.toggleDialog();

                }
            })
    }

    toggleDialog() {
        this.isOpen = !this.isOpen;
    }

}
