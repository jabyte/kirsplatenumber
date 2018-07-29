export class Inspection {
  inspectionId: number;
  certificateNumber: string;
  certificateDate: string;
  vehicleId: number;

  constructor();

  constructor(
    inspectionId: number = null,
    certificateNumber: string = null,
    certificateDate: string = null,
    vehicleId: number = null
  ) {
  }
}
