import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceExtractionComponent } from './invoice-extraction/invoice-extraction.component';
import { MockBackendService } from './mock-backend.service';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceExtractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MockBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
