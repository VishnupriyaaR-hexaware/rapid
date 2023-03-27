import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.service";

@Component({
  selector: "app-edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
  templateUrl: "./edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: ["./edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component.css"],
})
export class EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  data!: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyById(id)
      .subscribe((data: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      stid: new FormControl("", [Validators.required]),
      stname: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate([
            "/list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/",
          ]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
