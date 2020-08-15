import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directorio",
  templateUrl: "./directorio.component.html",
  styleUrls: ["./directorio.component.css"]
})
export class DirectorioComponent implements OnInit {

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
