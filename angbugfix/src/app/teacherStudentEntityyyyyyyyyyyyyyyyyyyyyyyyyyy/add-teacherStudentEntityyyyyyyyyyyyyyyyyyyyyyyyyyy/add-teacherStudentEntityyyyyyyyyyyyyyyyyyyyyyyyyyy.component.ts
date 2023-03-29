import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.service";

@Component({
  selector: "app-add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
  templateUrl:
    "./add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: [
    "./add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component.css",
  ],
})
export class AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      tsid: ["", []],
      tsname: ["", []],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy(this.form.value)
        .subscribe((res) => {
          this._router.navigate([
            "/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/",
          ]);
        });
    }
  }

  back() {
    this._router.navigate([
      "/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/",
    ]);
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
