import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle';
import {Engine} from '../models/engine';
import {Physical} from '../models/physical';
import {Ownership} from '../models/ownership';
import {Inspection} from '../models/inspection';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  hasError = true;

  vehicle: Vehicle;
  engine: Engine;
  physical: Physical;
  ownership: Ownership;
  inspection: Inspection;

  hideEngine = false;
  hidePhysical = true;
  hideInspection = true;
  hideOwnership = true;

  public vehicleTypes = ['Wagon', 'Cupe', 'Jeep', 'Pickup'];

  saveEngine(engine: Engine) {
  }

  savePhysical(physical: Physical) {
  }

  saveInspection(inspection: Inspection) {
  }

  saveOwnership(ownership: Ownership) {
  }

  constructor() {
  }

  ngOnInit() {
  }
}
