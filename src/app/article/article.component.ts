import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() articleDist: string;
  article: string;
  department: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.articleDist).subscribe(
      data => {
        this.department = data['department'];
        this.article = data['article'];
      }
    );
  }
}
