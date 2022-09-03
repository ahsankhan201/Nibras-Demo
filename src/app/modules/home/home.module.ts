import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from 'src/app/shared/shared.module'
import { HomeComponent } from 'src/app/modules/home/components'
import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'


@NgModule({
    declarations: [HomeComponent],
    imports: [HomeRoutingModule, HttpClientModule, SharedModule,FormsModule,CommonModule],
    providers: [],
})
export class HomeModule { }
