import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class TaskService {

  url = 'http://localhost:3000/task';

  constructor(private http: HttpClient) {
  }

  addTask(task) {
    return this.http.post(this.url, task);
  }

  getTaskList() {
    return this.http.get(this.url);
  }

  getOneTask(id) {
    return this.http.get(this.url + '/' + id);
  }

  editTask(task) {
    return this.http.put(this.url + '/' + task.id, task);
  }

  deleteTask(id) {
    return this.http.delete(this.url + '/' + id);
  }
}