import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  gifs =new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) {}
  getTrendingGifs()
  {
    let apiurl="https://api.giphy.com/v1/gifs/trending?api_key=jm8ZjbH3xP4IdeGotBuXY3nXhUUIZ5uQ&limit=10&rating=g";
    return this.http.get(apiurl)
      .subscribe((response:any)=>{
        this.gifs.next(response.data);
      });
  }

  searchGifs(_gifName:string){
    let searchurl="https://api.giphy.com/v1/stickers/search?api_key=jm8ZjbH3xP4IdeGotBuXY3nXhUUIZ5uQ&q="+_gifName+"&limit=10&offset=0&rating=g&lang=en";
    return this.http.get(searchurl)
      .subscribe((response:any)=>{
      this.gifs.next(response.data);
    });
  }
  
  
  getGifs(){
    return this.gifs.asObservable();
  }
   
}


