import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { UserService } from "../user.service";
import { AddUserComponent } from "./add-user.component";

describe("AddUserComponent", () => {
  let mockrouter: any;
  let mockUserService: any;
  let fixture: ComponentFixture<AddUserComponent>;
  let component: AddUserComponent;

  beforeEach(() => {
    mockUserService = jasmine.createSpyObj(["addUser"]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddUserComponent],
      providers: [
        FormBuilder,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockUserService.addUser.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should add User and navigate to list User", () => {
      component.form.setValue({
        userid: "userid",
        username: "username",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-user/"]);
    });
  });
});
