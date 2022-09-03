import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog.routing.module';
import { SharedModule } from 'src/app/shared/shared.module'
import { BlogsComponent } from 'src/app/modules/blogs/components';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [BlogsComponent],
    imports: [BlogRoutingModule, HttpClientModule, SharedModule,CommonModule],
    providers: [],
})
export class BlogModule { }
