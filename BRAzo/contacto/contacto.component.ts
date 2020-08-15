import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {

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
