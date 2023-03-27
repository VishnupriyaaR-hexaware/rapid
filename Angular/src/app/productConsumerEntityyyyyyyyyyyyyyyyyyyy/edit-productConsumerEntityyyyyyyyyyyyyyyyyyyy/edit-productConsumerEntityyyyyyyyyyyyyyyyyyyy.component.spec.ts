import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyy } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy.service";
import { EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";

describe("EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy;
  let mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService: any;
  let component: EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent;
  let fixture: ComponentFixture<EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent>;

  beforeEach(() => {
    mockdata = {
      pcid: "pcid",
      pcname: "pcname",
    };

    mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService = jasmine.createSpyObj([
      "getProductConsumerEntityyyyyyyyyyyyyyyyyyyyById",
      "editProductConsumerEntityyyyyyyyyyyyyyyyyyyy",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent],
      providers: [
        FormBuilder,
        {
          provide: ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService,
          useValue: mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService,
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
      EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent
    );
    component = fixture.componentInstance;
  });

  it("should get the ProductConsumerEntityyyyyyyyyyyyyyyyyyyy by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService.getProductConsumerEntityyyyyyyyyyyyyyyyyyyyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService.getProductConsumerEntityyyyyyyyyyyyyyyyyyyyById.and.returnValue(
        of(mockdata)
      );
      mockProductConsumerEntityyyyyyyyyyyyyyyyyyyyService.editProductConsumerEntityyyyyyyyyyyyyyyyyyyy.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the ProductConsumerEntityyyyyyyyyyyyyyyyyyyy by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        pcid: "pcid",
        pcname: "pcname",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-productConsumerEntityyyyyyyyyyyyyyyyyyyy/",
      ]);
    });
  });
});
