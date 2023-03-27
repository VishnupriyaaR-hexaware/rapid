import { Component, ViewChild, OnInit } from "@angular/core";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy.service";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyy } from "../productConsumerEntityyyyyyyyyyyyyyyyyyyy";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-productConsumerEntityyyyyyyyyyyyyyyyyyyy",
  templateUrl: "./list-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: ["./list-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component.css"],
})
export class ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  data: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy[] = [];
  dataSource =
    new MatTableDataSource<ProductConsumerEntityyyyyyyyyyyyyyyyyyyy>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["pcid", "pcname", "action"];

  constructor(
    public service: ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.service
      .getProductConsumerEntityyyyyyyyyyyyyyyyyyyy()
      .subscribe((data: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy[]) => {
        this.data = data;
        this.dataSource =
          new MatTableDataSource<ProductConsumerEntityyyyyyyyyyyyyyyyyyyy>(
            this.data
          );
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteProductConsumerEntityyyyyyyyyyyyyyyyyyyy(id).subscribe();
  }
}
