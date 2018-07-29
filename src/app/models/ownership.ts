export class Ownership {
  ownershipId: number;
  vendorName: string;
  datePurchase: string;
  status: string;
  yearManufactured: number;
  customerId: number;
  vehicleId: number;

  constructor();

  constructor(
    ownershipId: number = 0,
    vendorName: string = null,
    datePurchase: string = null,
    status: string = null,
    yearManufactured: number = null,
    customerId: number = null,
    vehicleId: number = null
  ) {
  }
}
