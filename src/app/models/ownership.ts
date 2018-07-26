export class Ownership {
  ownershipId: number;
  vendorName: string;
  datePurchase: string;
  status: string;
  yearManufactured: number;
  customerId: number;
  vehicleId: number;

  constructor(
    ownershipId: number = 0,
    vendorName: string,
    datePurchase: string,
    status: string,
    yearManufactured: number,
    customerId: number,
    vehicleId: number
  ) {
  }
}
