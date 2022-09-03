import { Component, OnInit } from '@angular/core';
import { BLOGPOST } from 'src/app/modules/home/intefaces/home.interface';
import { MetaService, NibrasService } from 'src/app/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Home';
  homepageDescription: string = 'Home page description';

  recentBlogPosts: BLOGPOST[] = [];
  dashboardDetails: any[] = [
    { title: 'Total Orders', price: 345, icon: 'shopping_cart' },
    { title: 'Total Expenses', price: 267, icon: 'account_balance_wallet' },
    { title: 'Total Revenue', price: 345, icon: 'insert_chart ' },
    { title: 'New Users', price: 345, icon: 'person' },
  ]

  constructor(private nibras: NibrasService, private meta: MetaService
  ) {
    this.meta.updateMetaTags(this.title, this.homepageDescription, 'Home', 'Nibras')
  }

  ngOnInit(): void {
    this.getRecentBlogs();
  }

  /**
   * Get Recent Blog Post
   */
  getRecentBlogs() {
    this.nibras.getblogPosts().subscribe((posts: any) => {
      posts.slice(0, 12).map((post: BLOGPOST) => {
        var randomNum = Math.floor(Math.random() * this.nibras.blogImages().length);
        this.recentBlogPosts.push({ title: post.title, description: post.body, image: this.nibras.blogImages()[randomNum] });
      });
    });
  }

}
