import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"]
})
export class PerfilComponent implements OnInit {
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
