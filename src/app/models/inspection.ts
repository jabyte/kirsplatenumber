export class Inspection {
  inspectionId: number;
  certificateNumber: string;
  certificateDate: string;
  vehicleId: number;

  constructor(
    inspectionId: number = 0,
    certificateNumber: string,
    certificateDate: string,
    vehicleId: number
  ) {
  }
}
