import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/task.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task;
  form: FormGroup;
  formEdit: FormGroup;
  editTaskInfoForm = {};
  editTaskClick = false;
  addeSuccess = false;
  user = JSON.parse(localStorage.getItem('user'))[0];

  constructor(private taskService: TaskService, private userService: UserService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required])
    });
    this.formEdit = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.min(2)]),
      desc: new FormControl('', [Validators.min(5)])
    });

    /*При першому запуску додатку вибираємо всі існуючі таски*/
    this.taskService.getTaskList().subscribe((response => {
      /*console.log(response);*/
      this.task = response;
    }));
  }

  onCreateNewTask() {
    const task = {
      title: this.form.value.title,
      desc: this.form.value.desc,
      whoAdds: this.user.id,
      edit: this.user.id
    };

    this.taskService.addTask(task).subscribe((res) => {
      this.task.push(res);
    });
  }

  onDeleteTask(id) {
    this.taskService.deleteTask(id).subscribe((response) => {
      console.log('delete task:', response);
      this.taskService.getTaskList().subscribe((res => {
        this.task = res;
      }));
    });
  }

  onEditTask(id) {
    this.taskService.getOneTask(id).subscribe((res) => {
      this.editTaskInfoForm = res;
      this.editTaskClick = true;
      this.addeSuccess = false;
      //console.log(res['title']);
    });
  }

  onEditTaskSend(itemForm) {
    let item = itemForm;

    /*перезаписуємо данні*/
    item.title = (this.formEdit.value.title.length > 0) ? this.formEdit.value.title : item.title;
    item.desc = (this.formEdit.value.desc.length > 0) ? this.formEdit.value.desc : item.desc;

    this.taskService.editTask(item).subscribe(() => {
      this.addeSuccess = true;
      this.taskService.getTaskList().subscribe((res => {
        this.task = res;
      }));
    });
  }

  onQuit() {
    this.editTaskClick = false;
  }

  /*метод для показу користувачів які бачуть таск*/
  /*whoCanView(ids) {

    //console.log(this.userService.getUserFor(ids));

    return 'good';

  }*/
}
