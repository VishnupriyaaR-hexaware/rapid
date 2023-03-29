import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { User } from "../user";
import { UserService } from "../user.service";
import { EditUserComponent } from "./edit-user.component";

describe("EditUserComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: User;
  let mockUserService: any;
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(() => {
    mockdata = {
      userid: "userid",
      username: "username",
    };

    mockUserService = jasmine.createSpyObj(["getUserById", "editUser"]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditUserComponent],
      providers: [
        FormBuilder,
        { provide: UserService, useValue: mockUserService },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
  });

  it("should get the User by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockUserService.getUserById.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockUserService.getUserById.and.returnValue(of(mockdata));
      mockUserService.editUser.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should edit the User by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        userid: "userid",
        username: "username",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-user/"]);
    });
  });
});
