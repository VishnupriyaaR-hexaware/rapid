import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.service";
import { EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";

describe("EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy;
  let mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService: any;
  let component: EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent;
  let fixture: ComponentFixture<EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent>;

  beforeEach(() => {
    mockdata = {
      stid: "stid",
      stname: "stname",
    };

    mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService = jasmine.createSpyObj([
      "getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyById",
      "editStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService,
          useValue: mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService,
        },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(
      EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  it("should get the StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService.getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService.getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyById.and.returnValue(
        of(mockdata)
      );
      mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService.editStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        stid: "stid",
        stname: "stname",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/",
      ]);
    });
  });
});
