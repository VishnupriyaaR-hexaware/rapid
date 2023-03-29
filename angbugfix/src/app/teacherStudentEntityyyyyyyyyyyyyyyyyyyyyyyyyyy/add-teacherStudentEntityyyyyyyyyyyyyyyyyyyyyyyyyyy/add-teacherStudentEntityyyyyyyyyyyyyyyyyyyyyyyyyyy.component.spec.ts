import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.service";
import { AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";

describe("AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService: any;
  let fixture: ComponentFixture<AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent>;
  let component: AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent;

  beforeEach(() => {
    mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService =
      jasmine.createSpyObj([
        "addTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
      ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
      ],
      providers: [
        FormBuilder,
        {
          provide: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService,
          useValue: mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(
      AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService.addTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy and navigate to list TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy", () => {
      component.form.setValue({
        tsid: "tsid",
        tsname: "tsname",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/",
      ]);
    });
  });
});
