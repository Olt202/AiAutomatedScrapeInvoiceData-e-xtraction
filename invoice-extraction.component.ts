import { Item, Customer, Invoice } from './invoice.model';
import { Component, Input, Output } from '@angular/core';
import { MockBackendService } from '../mock-backend.service';

@Component({
  selector: 'app-invoice-extraction',
  templateUrl: './invoice-extraction.component.html',
  styleUrls: ['./invoice-extraction.component.css']
})
export class InvoiceExtractionComponent {
  //fileToUpload: File | null = null;
  @Input('invoice.module')
  fileToUpload!: File;
  extractedData: string[] = [];
  api!: string;
  constructor(private mockBackendService: MockBackendService){}

  handleFileInput(event: any){
    this.fileToUpload = event.target.files[0];
  }

  extractData(){
    if(!this.fileToUpload) return;

    this.mockBackendService.extractInvoiceData(this.fileToUpload, this.api)
      .subscribe(
        (response) => {
          if(!response.error){
            this.extractData = response.data;
          } else{
            console.error('error extracting data:', response.error);
          }
        }

      )
    const invoiceData = {
      Item,
      Customer,
      Invoice
    }
    this.mockBackendService.extractInvoiceData(this.fileToUpload, invoiceData)
      .subscribe(
        (response) => {
          console.log('invoice data extracted succesfully', response);
        },
        (error) => {
          console.error('error extracting invoice data', error);
        }
      )
  }
}
