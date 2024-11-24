import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { ViewPublicationComponent } from './view-publication/view-publication.component';
import { ListPublicationsComponent } from './list-publications/list-publications.component';
import { FormsModule } from '@angular/forms';
import { MyPublicationsComponent } from './my-publications/my-publications.component';
import { CardsComponent } from './cards/cards.component';
import { DetailsCardsComponent } from './details-cards/details-cards.component';
import { DetailsPublicationComponent } from './details-publication/details-publication.component';




@NgModule({
  declarations: [
    AddPublicationComponent,
    ViewPublicationComponent,
    ListPublicationsComponent,
    MyPublicationsComponent,
    CardsComponent,
    DetailsCardsComponent,
    DetailsPublicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DetailsCardsComponent
  ]
})
export class PublicationsModule { }
