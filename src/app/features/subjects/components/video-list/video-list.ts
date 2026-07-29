import { Component,input } from '@angular/core';

@Component({
selector:'app-video-list',
standalone:true,
templateUrl:'./video-list.html',
styleUrl:'./video-list.scss'
})
export class VideoList{

videos=input<any[]>([]);

}