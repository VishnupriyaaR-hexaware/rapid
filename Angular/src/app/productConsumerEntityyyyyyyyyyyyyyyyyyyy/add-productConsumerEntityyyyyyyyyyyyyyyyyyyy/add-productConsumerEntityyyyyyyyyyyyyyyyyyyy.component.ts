import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy.service";

@Component({
  selector: "app-add-productConsumerEntityyyyyyyyyyyyyyyyyyyy",
  templateUrl: "./add-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: ["./add-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component.css"],
})
export class AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      pcid: ["", [Validators.required]],
      pcname: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addProductConsumerEntityyyyyyyyyyyyyyyyyyyy(this.form.value)
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
