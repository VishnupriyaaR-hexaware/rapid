import { Component, ViewChild, OnInit } from "@angular/core";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.service";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy } from "../studentTeacherEntityyyyyyyyyyyyyyyyyyyyy";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
  templateUrl: "./list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: ["./list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component.css"],
})
export class ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  data: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy[] = [];
  dataSource =
    new MatTableDataSource<StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["stid", "stname", "action"];

  constructor(
    public service: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.service
      .getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy()
      .subscribe((data: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy[]) => {
        this.data = data;
        this.dataSource =
          new MatTableDataSource<StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy>(
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
    this.service.deleteStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy(id).subscribe();
  }
}
