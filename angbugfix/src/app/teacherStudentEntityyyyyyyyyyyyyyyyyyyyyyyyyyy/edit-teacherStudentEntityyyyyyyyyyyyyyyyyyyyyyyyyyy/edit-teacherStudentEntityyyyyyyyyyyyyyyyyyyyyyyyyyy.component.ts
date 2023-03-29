import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.service";

@Component({
  selector: "app-edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
  templateUrl:
    "./edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: [
    "./edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component.css",
  ],
})
export class EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  data!: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyById(id)
      .subscribe((data: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      tsid: new FormControl("", [Validators.required]),
      tsname: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy(id, this.form.value)
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
