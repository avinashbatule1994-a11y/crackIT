import { Component, signal } from '@angular/core';
import { MarkdownViewer } from "../markdown-viewer/markdown-viewer";
import { CodeEditor } from "../code-editor/code-editor";
import { VideoList } from "../video-list/video-list";
import { InterviewList } from "../interview-list/interview-list";
import { McqList } from "../mcq-list/mcq-list";
import { ScenarioList } from '../scenario-list/scenario-list';

@Component({
  selector: 'app-topic-content',
  imports: [
    MarkdownViewer,
    CodeEditor,
    VideoList,
    InterviewList,
    McqList,
    ScenarioList
],
  templateUrl: './topic-content.html',
  styleUrl: './topic-content.scss',
})
export class TopicContent {

  selectedTab = signal('theory');

changeTab(tab: string) {
  this.selectedTab.set(tab);
}
}
