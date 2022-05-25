import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Product } from "../Model/product";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({providedIn:"root"})

export class Productservice{
    constructor(private http:HttpClient){

    }
    getAllproducts():Observable<Product[]>{
        let host=environment.hostspring;
        return this.http.get<Product[]>(host+"/produits/")
    }
    getprd(f:Number):Observable<Product>{
        let host=environment.hostspring;
        return this.http.get<Product>(host+"/produits/"+f);
    }
    searchbyPrduit(f:any):Observable<Product[]>{
        let host=environment.hostspring;
        return this.http.get<Product[]>(host+"/produits/filiere/"+f);
    }
}