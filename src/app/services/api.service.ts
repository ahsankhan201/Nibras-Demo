import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIURL } from "src/app/configuration/api-url";

@Injectable()
export class NibrasService {
    constructor(public http: HttpClient) { }

    /**
     * Get Posts
     * @returns 100 Posts
     */
    getblogPosts() {
        return this.http.get(
            APIURL.base + APIURL.posts
        );
    }

    /**
     * Get Users
     * @returns 10 Users
     */
    getUsers() {
        return this.http.get(
            APIURL.base + APIURL.users
        );
    }

    /**
     * Get Photos
     * @returns 5000 Photos
     */
    photos() {
        return this.http.get(
            APIURL.base + APIURL.photos
        );
    }

    /**
     * Random User Images
     * @returns 
     */
    userImages() {
        return ['https://i.postimg.cc/Z5zcQQx7/How-tracking-user-behavior-on-your-website-can-improve-customer-experience.png',
         'https://i.postimg.cc/BvqCS1y2/images-1.jpg', 
         'https://i.postimg.cc/rpQNKwX3/images.jpg', 
         'https://i.postimg.cc/KzW7DpY5/photo-1494790108377-be9c29b29330.jpg',
          'https://i.postimg.cc/4dybtRXd/photo-1633332755192-727a05c4013d.jpg',
        'https://i.postimg.cc/wxkDP4MF/images-2.jpg'
        ]
    }

    /**
     * Random Blogs Images
     * @returns 
     */
    blogImages() {
        return ['https://i.postimg.cc/Pqv8kWz6/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1520x800.png', 'https://i.postimg.cc/j2cDhZtj/20150824161251-wordpress-blogging-writing-typing-macbook-laptop-computer-technology-business-working.jpg', 'https://i.postimg.cc/QxMC3gjp/download.jpg', 'https://i.postimg.cc/SQ1qcBpM/images-1.jpg', 'https://i.postimg.cc/J49L2j07/images-2.jpg', 'https://i.postimg.cc/nzR8YDNJ/images.jpg', 'https://i.postimg.cc/VkyxR1Zd/why-blog.jpg',]
    }
}




