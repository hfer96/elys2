import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  listar_descuentos_admin(filtro:any, token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'listar_descuentos_admin/'+filtro,{headers:headers});
  }

  eliminar_descuento_admin(id:any, token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url+'eliminar_descuento_admin/'+id,{headers:headers});
  }
}
