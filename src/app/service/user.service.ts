import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class UserService {
  urlBase = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
  }

  addNewUser(user) {
    return this.http.post(this.urlBase, user);
  }

  getUser(user) {
    //console.log(this.urlBase + '?email=' + user.loginEmail + '&pass=' + user.loginPass);

    return this.http.get(this.urlBase + '?email=' + user.loginEmail + '&pass=' + user.loginPass);
  }

  getOneUser(id) {
    console.log(this.urlBase + '?id=' + id);

    return this.http.get(this.urlBase + '?id=' + id);
  }

  /*getUserFor (ids) {
    let result = [];
    if (typeof ids === 'object') {
      for (let i = 0; i < ids.length; i++) {
        this.http.get(this.urlBase + '?id=' + ids[i]).subscribe((res) => result.push(res));
      }
    } else if (typeof ids === 'number') {
      this.http.get(this.urlBase + '?id=' + ids).subscribe((res) => result.push(res));
    }

    return result;
  }*/

  getUserList() {
    return this.http.get(this.urlBase);
  }
}
