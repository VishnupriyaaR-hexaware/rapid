import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})
export class ListUserComponent implements OnInit {
  data: User[] = [];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["userid", "username", "action"];

  constructor(public service: UserService) {}

  ngOnInit(): void {
    this.service.getUser().subscribe((data: User[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<User>(this.data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteUser(id).subscribe();
  }
}
