export interface Resource {
  title: string;
  type: 'article' | 'documentation' | 'github' | 'blog';
  url: string;
}