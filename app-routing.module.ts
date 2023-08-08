import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceExtractionComponent } from './invoice-extraction/invoice-extraction.component';

const routes: Routes = [
  {
    path: 'api/server',
    component: InvoiceExtractionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
