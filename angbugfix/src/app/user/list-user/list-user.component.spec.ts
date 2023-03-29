import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { UserService } from "../user.service";
import { ListUserComponent } from "./list-user.component";
import { User } from "../user";

describe("ListUserComponent", () => {
  let mockpaginator: any;
  let mockdata: User[] = [];
  let mockUserService: any;
  let fixture: ComponentFixture<ListUserComponent>;
  let component: ListUserComponent;

  beforeEach(() => {
    mockdata = [
      {
        userid: "userid",
        username: "username",
      },
    ];

    mockUserService = jasmine.createSpyObj(["getUser", "deleteUser"]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListUserComponent],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
  });

  it("should get all the Users", async () => {
    mockUserService.getUser.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockUserService.deleteUser.and.returnValue(of(true));
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the User by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
