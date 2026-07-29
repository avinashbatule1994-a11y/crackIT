import { Component,input } from '@angular/core';

@Component({
selector:'app-interview-list',
standalone:true,
templateUrl:'./interview-list.html',
styleUrl:'./interview-list.scss'
})
export class InterviewList{

questions=input<any[]>([]);

}