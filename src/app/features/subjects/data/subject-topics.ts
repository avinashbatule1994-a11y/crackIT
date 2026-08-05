import { Topic } from '../../../core/models/topic.model';

import { ANGULAR_TOPICS } from './angular-topics';
import { JAVASCRIPT_TOPICS } from './javascript-topics';
import { TYPESCRIPT_TOPICS } from './typescript-topics';
import { NODEJS_TOPICS } from './nodejs-topics';
import { HTML_TOPICS } from './html-topics';
import { CSS_TOPICS } from './css-topics';
import { RXJS_TOPICS } from './rxjs-topics';
import { NGRX_TOPICS } from './ngrx-topics';
import { SIGNALS_TOPICS } from './signals-topics';
import { GIT_TOPICS } from './git-topics';
import { SQL_TOPICS } from './sql-topics';
import { REACT_TOPICS } from './react-topics';

export const SUBJECT_TOPICS: Record<string, Topic[]> = {
  angular: ANGULAR_TOPICS,
  javascript: JAVASCRIPT_TOPICS,
  typescript: TYPESCRIPT_TOPICS,
  nodejs: NODEJS_TOPICS,
  html: HTML_TOPICS,
  css: CSS_TOPICS,
  rxjs: RXJS_TOPICS,
  ngrx: NGRX_TOPICS,
  signals: SIGNALS_TOPICS,
  git: GIT_TOPICS,
  sql: SQL_TOPICS,
  react: REACT_TOPICS
};