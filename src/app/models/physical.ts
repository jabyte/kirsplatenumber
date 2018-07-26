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

  constructor(
    physicalId: number = 0,
    color: string,
    make: string,
    model: string,
    type: string,
    axleWeight: number,
    grossWeight: number,
    netWeight: number,
    passengerCounter: number,
    wheelsCount: number,
    vehicleId: number
  ) {

  }
}
