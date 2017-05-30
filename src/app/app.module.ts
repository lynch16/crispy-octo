import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { NewProductListingFormComponent } from './new-product-listing-form/new-product-listing-form.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    GameCanvasComponent,
    NewProductFormComponent,
    NewProductListingFormComponent,
    PaypalButtonComponent
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
