import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.service";
import { ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy";

describe("ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockpaginator: any;
  let mockdata: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy[] = [];
  let mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService: any;
  let fixture: ComponentFixture<ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent>;
  let component: ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent;

  beforeEach(() => {
    mockdata = [
      {
        stid: "stid",
        stname: "stname",
      },
    ];

    mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService = jasmine.createSpyObj([
      "getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
      "deleteStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent],
      providers: [
        {
          provide: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService,
          useValue: mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService,
        },
      ],
    });

    fixture = TestBed.createComponent(
      ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  it("should get all the StudentTeacherEntityyyyyyyyyyyyyyyyyyyyys", async () => {
    mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService.getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService.deleteStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
