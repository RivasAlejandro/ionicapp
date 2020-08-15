import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cuestionario",
  templateUrl: "./cuestionario.component.html",
  styleUrls: ["./cuestionario.component.css"]
})
export class CuestionarioComponent implements OnInit {

  defaultImage = "../../../assets/images/default.png";
  fileSelected: any = null;
  fileToUpload: any = null;
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
