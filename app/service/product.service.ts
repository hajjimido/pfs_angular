import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Product } from "../Model/product";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({providedIn:"root"})

export class Productservice{

    private host:string = environment.host;

    constructor(private http:HttpClient){

    }
    getAllproducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.host+"/products")
    }
    searchproduit(f:any):Observable<Product[]>{
        return this.http.get<Product[]>(this.host+"/products?titre_like="+f.titre+"&&filiere_like="+f.filiere);

    }
}