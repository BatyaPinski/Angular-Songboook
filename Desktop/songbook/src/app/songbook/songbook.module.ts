import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongbookRoutingModule } from './songbook-routing.module';
import { SongbookComponent } from './main-component/songbook.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SongbookComponent, HeaderComponent],
  imports: [
    CommonModule,
    SongbookRoutingModule
  ]
})
export class SongbookModule { }
