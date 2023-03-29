import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: UserService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      userid: ["", [Validators.required]],
      username: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service.addUser(this.form.value).subscribe((res) => {
        this._router.navigate(["/list-user/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
