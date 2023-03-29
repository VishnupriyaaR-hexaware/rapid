import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProductService } from "../product.service";
import { AddProductComponent } from "./add-product.component";

describe("AddProductComponent", () => {
  let mockrouter: any;
  let mockProductService: any;
  let fixture: ComponentFixture<AddProductComponent>;
  let component: AddProductComponent;

  beforeEach(() => {
    mockProductService = jasmine.createSpyObj(["addProduct"]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddProductComponent],
      providers: [
        FormBuilder,
        {
          provide: ProductService,
          useValue: mockProductService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockProductService.addProduct.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should add Product and navigate to list Product", () => {
      component.form.setValue({
        prid: 15,
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-product/"]);
    });
  });
});
