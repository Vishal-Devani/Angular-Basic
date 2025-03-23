import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    ProfileComponent,
    FormsModule,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    RouterLink,
    RouterOutlet,
    HeaderComponent    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x = 10;
  y = 20;

  handleClickEvent() {
    alert("Function Called");
    this.otherFunction();
  }

  otherFunction() {
    alert("Other Function")
  }

  name: string = "Vishal Devani";

  updateName() {
    this.name = "20"
  }

  count = 0;

  handleCounter(val: string) {
    console.log(val);
    if (val == 'plus') {
      this.count = this.count + 1;
    } else if (val == 'minus') {
      this.count = this.count - 1;
    } else {
      this.count = 0;
    }
  }

  display = true;

  toggle() {
    this.display = !this.display;
  }

  email: string = 'test@test.com'

  getEmail(val: string) {
    this.email = val;
  }

  color = 'blue'

  handleColor(val: string) {
    this.color = val
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value
  }

  users = ["Vishal", "Kishu"]
  students = [
    { 
      name: 'vishal', 
      age: 22,
      data: {
        room: 'first',
        seat: 1

      } 
    },
    { 
      name: 'kishu', 
      age: 20,
      data: {
        room: 'second',
        seat: 3

      } 
    }
  ]

  //To-do List

  task = ""
  taskList: { id: number, task: string }[] = []

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task })
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId);
  }

  //Dynamic Style

  bgColor="skyblue"
   
  updateHead(){
    this.display = !this.display
  }

  //*ngSwitch

  switchColor='blank'

  changeSwithColor(color:string){
    this.switchColor=color
  }
}
