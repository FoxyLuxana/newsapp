import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeadlinService } from '../../headlin-service.service';

@Component({
  selector: 'app-headlines',
  standalone: true,
  imports: [],
  templateUrl: './headlines.component.html',
  styleUrl: './headlines.component.css'
})
export class HeadlinesComponent {
  headlines: Array<any> = []
  category: string = "";
  
  constructor(private route:ActivatedRoute, private headlineService:HeadlinService

  ) {
    this.route.params.subscribe(p=> {
      this.category = p['category'] != undefined ? p['category'] : ""
      this.headlineService.getHeadlines(this.category).subscribe(headliners=> this.headlines=headliners)
    })
    if (!this.category) 
      {
        this.category = "news"
      }
  }
}
