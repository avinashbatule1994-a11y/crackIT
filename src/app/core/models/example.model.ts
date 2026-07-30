export interface EditorFile {

  name: string;

  language: string;

  code: string;

}

export interface Example {

  title: string;

  description: string;

  files: EditorFile[];

}