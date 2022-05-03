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
        let host=environment.host;
        return this.http.get<Product[]>(host+"/products")
    }
    searchproduit(f:any):Observable<Product[]>{
        let host=environment.host;
        return this.http.get<Product[]>(host+"/products?titre_like="+f.titre+"&&filiere_like="+f.filiere);


    }
}