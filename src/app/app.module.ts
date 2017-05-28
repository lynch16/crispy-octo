import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    GameCanvasComponent,
    NewProductFormComponent,
    EditProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
