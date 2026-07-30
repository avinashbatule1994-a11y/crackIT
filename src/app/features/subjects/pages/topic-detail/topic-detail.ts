import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { PageHeader } from '../../../../shared/components/page-header/page-header';

import { MarkdownViewer } from '../../components/markdown-viewer/markdown-viewer';
import { MonacoEditorComponent } from '../../components/monaco-editor/monaco-editor';
import { CodeEditor } from '../../components/code-editor/code-editor';
import { VideoList } from '../../components/video-list/video-list';
import { InterviewList } from '../../components/interview-list/interview-list';

import { ANGULAR_CONTENT } from '../../data/angular-content';
import { TopicContent } from '../../../../core/models/topic-content-model';
import { SubjectSidebar } from '../../components/subject-sidebar/subject-sidebar';

type Tab =
  | 'theory'
  | 'examples'
  | 'practice'
  | 'videos'
  | 'resources'
  | 'interview'
  | 'scenario'
  | 'mcq';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [
    // Sidebar,
    PageHeader,
    MarkdownViewer,
    CodeEditor,
    MonacoEditorComponent,
    VideoList,
    InterviewList,
    // SubjectSidebar
  ],
  templateUrl: './topic-detail.html',
  styleUrl: './topic-detail.scss'
})
export class TopicDetail {

  private route = inject(ActivatedRoute);

  content = signal<TopicContent | null>(null);

  selectedTab = signal<Tab>('theory');

  constructor() {

    const topic = this.route.snapshot.paramMap.get('topic');

    if (topic && topic in ANGULAR_CONTENT) {
      this.content.set(
        ANGULAR_CONTENT[topic as keyof typeof ANGULAR_CONTENT]
      );
    }

  }

  selectTab(tab: Tab) {
    this.selectedTab.set(tab);
  }

}