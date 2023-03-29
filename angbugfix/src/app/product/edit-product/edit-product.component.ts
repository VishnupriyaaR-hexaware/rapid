import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  data!: Product;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ProductService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service.getProductById(id).subscribe((data: Product) => {
      this.data = data;
    });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      prid: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service.editProduct(id, this.form.value).subscribe((res) => {
        this._router.navigate(["/list-product/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
