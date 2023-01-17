import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/internal/Observable';
import { BaseService } from "../../comum/base.service";
import { Usuario } from '../usuario.interface';

@Injectable()
export class SignInService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    login(filtro: any): Observable<Usuario> {
        return this.http.get<Usuario>(this.getUrlBase() + '/login', this.montarParametros(filtro));
    }

}
