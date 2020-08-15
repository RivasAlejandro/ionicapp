import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inicio-tratamiento",
  templateUrl: "./inicio-tratamiento.component.html",
  styleUrls: ["./inicio-tratamiento.component.css"]
})
export class InicioTratamientoComponent implements OnInit {

  dialog2 = false;
  defaultImage =
    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";
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

  toggle2() {
    this.dialog2 = !this.dialog2;
  }
}
