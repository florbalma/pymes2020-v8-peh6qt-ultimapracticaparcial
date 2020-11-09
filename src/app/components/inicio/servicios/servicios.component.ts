import { Component, OnInit } from "@angular/core";
import { Servicio, Servicios } from "../../models/servicio";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.css"]
})
export class ServiciosComponent implements OnInit {
  Items = Servicios;
  Titulo = "Servicios";

  constructor() {}

  ngOnInit() {}
}
