import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.html',
  styleUrls: ['./todoapp.css']
})
export class TodoappComponent  {
	title:string="";
	tasks:any;
	updatedtitle:string;
  constructor() {
  this.tasks=[]; }
  		// Add new task to an array
		addtask(){

	        this.tasks.push({title:this.title,complet:false,update:false});
	        this.title="";

			}
		// put the task into complet section
		completit(i,event){
			if(event){
			this.tasks[i].complet="true";
		}
			}
		// Modifier clicked ; change data in array
		modifier(i){
		
		console.log("i="+i);
		this.tasks[i].update=true;
		}
		// remove the item from array using index
		supp(i){
		this.tasks.splice(i,1);

	}
	// update data
	update(i,title){
		console.log(title);
		console.log(i);
		this.tasks[i].update=false;
		this.tasks[i].title=title;

	}
}
