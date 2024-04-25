import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeadlinService {
  private readonly BASE_API_URL = "https://newsapi.org/v2/top-headlines"
  private readonly API_KEY = "apiKey=39660d1ff1294e7d87bc93347b42d7de"
  
  constructor(private httpClient: HttpClient) { }

  getHeadlines(category: string | undefined){
    return this.httpClient.get(`${this.BASE_API_URL}?country=us&${category!=undefined?"category="+category.toLowerCase()+"&":""}${this.API_KEY}`).pipe(
      map((response: any) => response.articles)
    )
  }
}
