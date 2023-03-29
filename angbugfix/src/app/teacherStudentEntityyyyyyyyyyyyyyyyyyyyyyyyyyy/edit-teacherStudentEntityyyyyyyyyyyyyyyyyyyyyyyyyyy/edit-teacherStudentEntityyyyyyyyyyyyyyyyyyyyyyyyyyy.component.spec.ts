import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.service";
import { EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";

describe("EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy;
  let mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService: any;
  let component: EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent;
  let fixture: ComponentFixture<EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent>;

  beforeEach(() => {
    mockdata = {
      tsid: "tsid",
      tsname: "tsname",
    };

    mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService =
      jasmine.createSpyObj([
        "getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyById",
        "editTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
      ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
      ],
      providers: [
        FormBuilder,
        {
          provide: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService,
          useValue: mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService,
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
      EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  it("should get the TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService.getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService.getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyById.and.returnValue(
        of(mockdata)
      );
      mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService.editTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        tsid: "tsid",
        tsname: "tsname",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/",
      ]);
    });
  });
});
