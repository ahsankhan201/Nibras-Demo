import { Component, OnInit } from '@angular/core';
import { NibrasService, MetaService } from 'src/app/services';
import { USER } from 'src/app/modules/users/interfaces/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public searchTerm$ = new Subject<string>();

  users: USER[] = [];
  filterUsers: any[] = [];
  totalUsers: any[] = [];
  displayedColumns: string[] = ['image', 'name', 'email', 'website'];
  dataSource: any;
  selectedView: string = 'card';

  title: string = 'Users';

  userDescription: string = '';
  constructor(private nibras: NibrasService, private meta: MetaService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.meta.updateMetaTags(this.title, 'User Page Description', 'users', 'Nibras')
  }

  /**
    * Get User
    */
  getUsers() {
    this.users = [];
    this.nibras.getUsers().subscribe((users: any) => {
      users.forEach((user: USER) => {
        var randomNum = Math.floor(Math.random() * this.nibras.userImages().length);
        this.users.push({ email: user.email, image: this.nibras.userImages()[randomNum], name: user.name, website: user.website });
      });
      this.filterUsers = this.users;
      this.dataSource = new MatTableDataSource<USER>(this.users);
      this.userDescription = `Total user : ${this.users.length}`
    });
  }

  counter(i: number) {
    return new Array(i);
  }


  search(event: any) {

    let searchValue = event.target.value.toLocaleLowerCase();
    this.users = this.filterUsers.filter((searchData: USER) => {
      return (
        searchData.name.toLocaleLowerCase().match(searchValue) ||
        searchData.email.toLocaleLowerCase().match(searchValue) ||
        searchData.website.toLocaleLowerCase().match(searchValue)
      );
    });
    this.dataSource = new MatTableDataSource<USER>(this.users);
  }


  showEntries(event: any) {
    if (event.target.value === 'All') {
      this.getUsers();
    } else {
      this.users = [];
      this.users = this.filterUsers.slice(0, event.target.value);
      this.dataSource = new MatTableDataSource<USER>(this.users);
    }
  }

  gridViewChange(mode: string) {
    this.selectedView = mode;
  }

}
