import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  gifs =new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) {}
  getTrendingGifs()
  {
    let apiurl="https://api.giphy.com/v1/gifs/trending?api_key=EnHud6ugjdWhCe7CBrv7WYf58Zq1H4B6&limit=10&rating=g";
    return this.http.get(apiurl)
      .subscribe((response:any)=>{
        this.gifs.next(response.data);
      });
  }

  searchGifs(_gifName:string){
    let searchurl="https://api.giphy.com/v1/gifs/search?q={search}&api_key=EnHud6ugjdWhCe7CBrv7WYf58Zq1H4B6&limit=10&rating=g";
    return this.http.get(searchurl)
      .subscribe((response:any)=>{
        this.gifs.next(response.data);
    });
  }
  
  
  getGifs(){
    return this.gifs.asObservable();
  }
   
}


