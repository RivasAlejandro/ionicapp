import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pago-mensual",
  templateUrl: "./pago-mensual.component.html",
  styleUrls: ["./pago-mensual.component.css"]
})
export class PagoMensualComponent implements OnInit {

  dialog = false;
  dialog2 = false;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.dialog = !this.dialog;
  }

  toggle2() {
    this.dialog2 = !this.dialog2;
  }
}
