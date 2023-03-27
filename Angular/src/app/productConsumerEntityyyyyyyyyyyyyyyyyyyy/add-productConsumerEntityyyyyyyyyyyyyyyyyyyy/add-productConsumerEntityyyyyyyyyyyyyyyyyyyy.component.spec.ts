import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy.service";
import { AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./add-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";

describe("AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService: any;
  let fixture: ComponentFixture<AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent>;
  let component: AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent;

  beforeEach(() => {
    mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService = jasmine.createSpyObj([
      "addProductConsumerEntityyyyyyyyyyyyyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService,
          useValue: mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(
      AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService.addProductConsumerEntityyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add ProductConsumerEntityyyyyyyyyyyyyyyyyyyy and navigate to list ProductConsumerEntityyyyyyyyyyyyyyyyyyyy", () => {
      component.form.setValue({
        pcid: "pcid",
        pcname: "pcname",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-productConsumerEntityyyyyyyyyyyyyyyyyyyy/",
      ]);
    });
  });
});
