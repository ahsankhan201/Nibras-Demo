import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable()
export class MetaService {
    constructor(private metaTagService: Meta, private titleService: Title) { }
    
    updateMetaTags(title: string, description: string, keywords: string, sitename: string) {
        this.titleService.setTitle(title);
        this.metaTagService.updateTag(
            { name: 'title', content: title }
        );
        this.metaTagService.updateTag(
            { name: 'description', content: description }
        );
        this.metaTagService.updateTag(
            { name: 'keywords', content: keywords }
        );
        this.metaTagService.updateTag(
            { property: 'og:site_name', content: sitename }
        );

        this.metaTagService.updateTag(
            { property: 'og:description', content: description }
        );
        this.metaTagService.updateTag(
            { property: 'og:title', content: title }
        );
    }
}




