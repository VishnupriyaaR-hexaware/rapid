import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy.service";
import { ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./list-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyy } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy";

describe("ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockpaginator: any;
  let mockdata: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy[] = [];
  let mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService: any;
  let fixture: ComponentFixture<ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent>;
  let component: ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent;

  beforeEach(() => {
    mockdata = [
      {
        pcid: "pcid",
        pcname: "pcname",
      },
    ];

    mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService = jasmine.createSpyObj([
      "getProductConsumerEntityyyyyyyyyyyyyyyyyyyy",
      "deleteProductConsumerEntityyyyyyyyyyyyyyyyyyyy",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent],
      providers: [
        {
          provide: ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService,
          useValue: mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService,
        },
      ],
    });

    fixture = TestBed.createComponent(
      ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  it("should get all the ProductConsumerEntityyyyyyyyyyyyyyyyyyyys", async () => {
    mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService.getProductConsumerEntityyyyyyyyyyyyyyyyyyyy.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService.deleteProductConsumerEntityyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the ProductConsumerEntityyyyyyyyyyyyyyyyyyyy by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
