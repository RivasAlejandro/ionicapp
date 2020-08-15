import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datos-pago",
  templateUrl: "./datos-pago.component.html",
  styleUrls: ["./datos-pago.component.css"]
})
export class DatosPagoComponent implements OnInit {
  defaultImage = "../../../assets/images/default.png";
  fileSelected: any = null;
  fileToUpload: any = null;
  months: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  years: string[] = ["20", "21", "22", "23", "24", "26", "27", "28", "29", "30", "31"];

  constructor() {}

  ngOnInit() {}

  fileChangeEvent(imagen) {
    if (!imagen) {
      this.fileSelected = null;
      return;
    }
    this.fileToUpload = imagen.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onloadend = () => {
      this.fileSelected = reader.result;
    };
  }
}
