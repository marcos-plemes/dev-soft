import { HttpParams } from "@angular/common/http";
import { environment } from "src/environment/environment";

export abstract class BaseService {

    constructor() {

    }

    getUrlBase() {
        return `${environment.protocoloHttp}://${environment.baseUrl}${environment.api}`;
    }

    montarParametros(obj: Object) {
        return { params: this.toHttpParams(obj, new HttpParams()) };
    }

    private toHttpParams(obj: Object, params: HttpParams): HttpParams {

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {

                const val = obj[key as keyof Object];
                if (val !== null && val !== undefined) {

                    if (val !== null && typeof val === 'object') {
                        params = this.toHttpParams(val, params);

                    } else {
                        params = params.append(key, val.toString());
                    }
                }
            }
        }

        return params;
    }

}
