import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/usuarios/user.service';
import { User } from '../../interfaces/usuario.interface';

@Component({
    selector: 'app-user-forms',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './user-forms.component.html',
    styleUrl: './user-forms.component.scss'
})
export class UserFormsComponent {

    @Output() usuario: EventEmitter<User> = new EventEmitter();

    contactForm!: FormGroup;
    isOpen: boolean = false;

    constructor(
        private fb: FormBuilder,
        private userService: UserService
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
        this.userService.postUsuario(this.contactForm.value)
            .subscribe(res => {
                if (res.status === 201) {
                    this.contactForm.reset();
                    this.toggleDialog();
                    this.usuario.emit(res.body!)
                }
            })
    }

    toggleDialog() {
        this.isOpen = !this.isOpen;
    }

}
