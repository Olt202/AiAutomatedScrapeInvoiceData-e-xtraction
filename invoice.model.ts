export class Invoice {
  invoice_number!: string;
  invoice_date!: string;
  customer!: Customer;
  items!: Item[];
  total_amount!: number;
}

export class Customer {
  name!: string;
  address!: string;
  city!: string;
  country!: string;
}

export class Item {
  description!: string;
  quantity!: number;
  unit_price!: number;
  total_price!: number;
}
