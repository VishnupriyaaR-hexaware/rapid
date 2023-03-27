import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.service";
import { AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";

describe("AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService: any;
  let fixture: ComponentFixture<AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent>;
  let component: AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent;

  beforeEach(() => {
    mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService = jasmine.createSpyObj([
      "addStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService,
          useValue: mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(
      AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService.addStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy and navigate to list StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy", () => {
      component.form.setValue({
        stid: "stid",
        stname: "stname",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/",
      ]);
    });
  });
});
