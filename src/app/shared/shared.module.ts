import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from 'src/app/shared/components/title-bar/title-bar.component';
import { MaterialModule } from 'src/app/material.module';
import { NibrasService, MetaService } from 'src/app/services';

const SHARED_MODULEs = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule];

const SHARED_COMPONENTS = [TitleBarComponent];

@NgModule({
    imports: [SHARED_MODULEs],
    exports: [SHARED_MODULEs, SHARED_COMPONENTS],
    declarations: [SHARED_COMPONENTS],
    providers: [NibrasService, MetaService],
})
export class SharedModule { }
