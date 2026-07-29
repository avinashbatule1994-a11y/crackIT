export interface CodeExample {
  title: string;
  code: string;
}

export interface Video {
  title: string;
  youtubeId: string;
}

export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface Mcq {
  question: string;
  options: string[];
  answer: number;
}

export interface TopicContent {
  title: string;
  theory: string;
  examples: CodeExample[];
  videos: Video[];
  resources: { title: string; url: string }[];
  interview: InterviewQuestion[];
  scenario: InterviewQuestion[];
  mcqs: Mcq[];
}


