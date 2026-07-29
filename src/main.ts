import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import * as monaco from 'monaco-editor';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

self.MonacoEnvironment={

getWorkerUrl:function(){

return './assets/monaco/vs/base/worker/workerMain.js';

}

};