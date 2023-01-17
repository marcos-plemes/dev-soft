import { Component } from '@angular/core';
import { BaseComponent } from '../../comum/base.component';
import { Usuario } from '../usuario.interface';
import { SignInService } from './sign-in.service';

@Component({
    selector: 'dev-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends BaseComponent {

    filtroUsuario: Usuario = {};

    constructor(private service: SignInService) {
        super();
    }

    login() {
        this.service.login(this.filtroUsuario)
            .subscribe(console.log)
    }

}
