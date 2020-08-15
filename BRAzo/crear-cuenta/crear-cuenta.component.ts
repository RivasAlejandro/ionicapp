import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crear-cuenta",
  templateUrl: "./crear-cuenta.component.html",
  styleUrls: ["./crear-cuenta.component.css"]
})
export class CrearCuentaComponent  implements OnInit {
  defaultImage = "../../../assets/images/default.png";
  fileSelected: any = null;
  fileToUpload: any = null;
  gender: string[] = ["Masculino", "Femenino"];

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
