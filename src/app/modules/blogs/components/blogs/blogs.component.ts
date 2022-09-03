import { Component, OnInit } from '@angular/core';
import { BLOGPOST } from 'src/app/modules/home/intefaces/home.interface';
import { MetaService, NibrasService } from 'src/app/services';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogPosts: BLOGPOST[] = [];
  title: string = 'Blogs';
  blogDescription: string = '';
  constructor(private nibras: NibrasService, private meta: MetaService) { }

  ngOnInit(): void {
    this.getBlogPost();
    this.meta.updateMetaTags(this.title, 'Blog Page Description', 'Blogs', 'Nibras')
  }

  /**
 * Get Recent Blog Post
 */
  getBlogPost() {
    this.nibras.getblogPosts().subscribe((posts: any) => {
      posts.map((post: BLOGPOST) => {
        var randomNum = Math.floor(Math.random() * this.nibras.blogImages().length);
        this.blogPosts.push({ title: post.title, description: post.body, image: this.nibras.blogImages()[randomNum] });
      });
      this.blogDescription = `Total Blogs : ${this.blogPosts.length}`
    });
  }

  /**
   * Format Title
   * @param title 
   * @returns 
   */
  displayTitle(title: any) {
    return title.substring(0, 15)
  }
}
