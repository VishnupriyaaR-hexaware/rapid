import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyy } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy.service";

@Component({
  selector: "app-edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy",
  templateUrl: "./edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: ["./edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component.css"],
})
export class EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  data!: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getProductConsumerEntityyyyyyyyyyyyyyyyyyyyById(id)
      .subscribe((data: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      pcid: new FormControl("", [Validators.required]),
      pcname: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editProductConsumerEntityyyyyyyyyyyyyyyyyyyy(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate([
            "/list-productConsumerEntityyyyyyyyyyyyyyyyyyyy/",
          ]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
