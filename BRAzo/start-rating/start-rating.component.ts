import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-start-rating",
  templateUrl: "./start-rating.component.html",
  styleUrls: ["./start-rating.component.css"],
})
export class StartRatingComponent implements OnInit {
  @Input() rating = 1 + Math.floor((5 - 1) * Math.random());
  @Input() size = "18px";
  @Input() marginLeft = "-4px";
  constructor() {}
  ngOnInit() {}
}
