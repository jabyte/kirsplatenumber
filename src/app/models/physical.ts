export class Physical {
  physicalId: number;
  color: string;
  make: string;
  model: string;
  type: string;
  axleWeight: number;
  grossWeight: number;
  netWeight: number;
  passengerCounter: number;
  wheelsCount: number;
  vehicleId: number;

  constructor();

  constructor(
    physicalId: number = null,
    color: string = null,
    make: string = null,
    model: string = null,
    type: string = null,
    axleWeight: number = null,
    grossWeight: number = null,
    netWeight: number = null,
    passengerCounter: number = null,
    wheelsCount: number = null,
    vehicleId: number = null
  ) {
  }
}
