import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { Product } from "../product";
import { ProductService } from "../product.service";
import { EditProductComponent } from "./edit-product.component";

describe("EditProductComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: Product;
  let mockProductService: any;
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(() => {
    mockdata = {
      prid: 48,
    };

    mockProductService = jasmine.createSpyObj([
      "getProductById",
      "editProduct",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditProductComponent],
      providers: [
        FormBuilder,
        { provide: ProductService, useValue: mockProductService },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
  });

  it("should get the Product by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockProductService.getProductById.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockProductService.getProductById.and.returnValue(of(mockdata));
      mockProductService.editProduct.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should edit the Product by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        prid: 70,
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-product/"]);
    });
  });
});
