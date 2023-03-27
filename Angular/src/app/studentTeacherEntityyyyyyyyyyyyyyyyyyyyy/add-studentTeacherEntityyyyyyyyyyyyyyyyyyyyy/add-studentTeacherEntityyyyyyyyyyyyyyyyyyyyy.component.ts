import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.service";

@Component({
  selector: "app-add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
  templateUrl: "./add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: ["./add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component.css"],
})
export class AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      stid: ["", [Validators.required]],
      stname: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy(this.form.value)
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
