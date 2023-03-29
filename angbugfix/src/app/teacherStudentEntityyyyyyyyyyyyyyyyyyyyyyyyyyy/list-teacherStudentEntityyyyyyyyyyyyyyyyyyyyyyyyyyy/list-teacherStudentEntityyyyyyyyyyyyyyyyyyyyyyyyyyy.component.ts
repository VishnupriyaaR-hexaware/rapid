import { Component, ViewChild, OnInit } from "@angular/core";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.service";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy } from "../teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
  templateUrl:
    "./list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component.html",
  styleUrls: [
    "./list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component.css",
  ],
})
export class ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent
  implements OnInit
{
  data: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy[] = [];
  dataSource =
    new MatTableDataSource<TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["tsid", "tsname", "action"];

  constructor(
    public service: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService
  ) {}

  ngOnInit(): void {
    this.service
      .getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy()
      .subscribe((data: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy[]) => {
        this.data = data;
        this.dataSource =
          new MatTableDataSource<TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy>(
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
    this.service
      .deleteTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy(id)
      .subscribe();
  }
}
