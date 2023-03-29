import { Component, ViewChild, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"],
})
export class ListProductComponent implements OnInit {
  data: Product[] = [];
  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["prid", "action"];

  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.service.getProduct().subscribe((data: Product[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<Product>(this.data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteProduct(id).subscribe();
  }
}
