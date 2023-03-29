import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.service";
import { ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy";

describe("ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockpaginator: any;
  let mockdata: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy[] = [];
  let mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService: any;
  let fixture: ComponentFixture<ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent>;
  let component: ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent;

  beforeEach(() => {
    mockdata = [
      {
        tsid: "tsid",
        tsname: "tsname",
      },
    ];

    mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService =
      jasmine.createSpyObj([
        "getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
        "deleteTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
      ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [
        ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
      ],
      providers: [
        {
          provide: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService,
          useValue: mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService,
        },
      ],
    });

    fixture = TestBed.createComponent(
      ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  it("should get all the TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyys", async () => {
    mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService.getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService.deleteTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
