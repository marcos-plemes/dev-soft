import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../../comum/base.component';
import { Usuario } from '../usuario.interface';

@Component({
    selector: 'dev-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends BaseComponent implements OnInit {


    form: FormGroup;

    entidade: Usuario = {};

    constructor(formBuilder: FormBuilder) {
        super();
        this.form = formBuilder.group({
            codigo: [this.entidade.codigo],
            nome: [this.entidade.nome, [Validators.required]],
            sobrenome: [this.entidade.sobrenome, [Validators.required]],
            cpf: [this.entidade.cpf, [Validators.required]],
            celular: [this.entidade.celular, [Validators.required]],
            email: [this.entidade.email, [Validators.required]],
            senha: [this.entidade.senha, [Validators.required]]
        });
    }

    ngOnInit(): void {

    }



}
