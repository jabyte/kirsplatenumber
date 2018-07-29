import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Engine } from '../models/engine';
import { Physical } from '../models/physical';
import { Ownership } from '../models/ownership';
import { Inspection } from '../models/inspection';
import { VehicleService } from '../services/vehicle.service';
import { EngineService } from '../services/engine.service';
import { PhysicalService } from '../services/physical.service';
import { OwnershipService } from '../services/ownership.service';
import { InspectionService } from '../services/inspection.service';
import { toNumbers } from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})

export class VehicleFormComponent implements OnInit {

  constructor(
    private vehicleService: VehicleService,
    private engineService: EngineService,
    private physicalService: PhysicalService,
    private ownershipService: OwnershipService,
    private inspectionService: InspectionService
  ) {
  }

  hasError = true;

  vehicle: Vehicle = new Vehicle();
  engine: Engine = new Engine();
  physical: Physical = new Physical();
  ownership: Ownership = new Ownership();
  inspection: Inspection = new Inspection();

  hideEngine = true;
  hidePhysical = true;
  hideInspection = false;
  hideOwnership = true;

  // public vehicleTypes = ['Wagon', 'Cupe', 'Jeep', 'Pickup'];

  saveVehicle(vehicle: Vehicle) {
    this.vehicleService.postVehicle(vehicle).subscribe(resp => {
      if (resp.chasisNumber === vehicle.chasisNumber) {
        this.vehicle.vehicleId = resp.vehicleId;
        // this.saveEngine(this.engine, resp.vehicleId);
        this.hideInspection = !this.hideInspection;
        this.hideOwnership = !this.hideOwnership;
      }
    });
  }

  saveEngine(engine: Engine, vehicleId: number) {
    if (this.vehicle != null && this.vehicle.chasisNumber != null) {
      engine.vehicleId = vehicleId;
      console.log(JSON.stringify(engine));
      this.engineService.postEngine(engine).subscribe(resp => {
        this.hideEngine = !this.hideEngine;
        this.hidePhysical = !this.hidePhysical;
        // console.log(resp);
      });
    }
  }

  savePhysical(physical: Physical) {
    if (this.vehicle != null && this.vehicle.chasisNumber != null) {
      physical.vehicleId = this.vehicle.vehicleId;
      console.log(this.vehicle);
      this.physicalService.postPhysical(physical).subscribe(resp => {
        console.log(resp);
        this.hidePhysical = !this.hidePhysical;
        this.hideInspection = !this.hideInspection;
      });
    }
  }

  saveInspection(inspection: Inspection) {
    // if (this.vehicle.vehicleId != null) {
    inspection.vehicleId = this.vehicle.vehicleId;
    inspection.vehicleId = 1;
    console.log(inspection);
    this.inspectionService.postInspection(inspection).subscribe(resp => {
      console.log(resp);
      this.hideInspection = !this.hideInspection;
      this.hideOwnership = !this.hideOwnership;
    });
    // }
  }



  saveOwnership(ownership: Ownership) {
    if (this.vehicle.vehicleId != null) {
      ownership.vehicleId = this.vehicle.vehicleId;

      this.ownershipService.postOwnership(ownership).subscribe(resp => {
        console.log(resp);
        this.hideOwnership = !this.hideOwnership;
      });
    }
  }

  ngOnInit() {
  }
}
