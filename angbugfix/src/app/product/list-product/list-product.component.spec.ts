import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ProductService } from "../product.service";
import { ListProductComponent } from "./list-product.component";
import { Product } from "../product";

describe("ListProductComponent", () => {
  let mockpaginator: any;
  let mockdata: Product[] = [];
  let mockProductService: any;
  let fixture: ComponentFixture<ListProductComponent>;
  let component: ListProductComponent;

  beforeEach(() => {
    mockdata = [
      {
        prid: 27,
      },
    ];

    mockProductService = jasmine.createSpyObj(["getProduct", "deleteProduct"]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListProductComponent],
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
  });

  it("should get all the Products", async () => {
    mockProductService.getProduct.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockProductService.deleteProduct.and.returnValue(of(true));
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the Product by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
