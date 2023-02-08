import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { category } from "../data/category";

@Injectable()
export class categoryService{
    baseURL:string="http://localhost/PoC_UploadImage/api/Category";
    constructor(private http:HttpClient){}


    Insert(Category:category):Observable<any>{
        debugger;
        return this.http.post(this.baseURL+ "/Insert",Category);
    }

    getImage(id:number):Observable<any>{
        
        return this.http.get(this.baseURL+ "/Load?id="+id);
    }
}