import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user.routing.module';
import { SharedModule } from 'src/app/shared/shared.module'
import { UsersComponent, UserCardComponent } from 'src/app/modules/users/components';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [UsersComponent,UserCardComponent],
    imports: [UserRoutingModule, HttpClientModule, SharedModule, CommonModule],
    providers: [],
})
export class UserModule { }
