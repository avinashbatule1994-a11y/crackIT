examples: [

{

title:"Create First Component",

description:"Basic Angular Component",

files:[

{

name:"app.component.ts",

language:"typescript",

code:`

import { Component } from '@angular/core';

@Component({

selector:'app-root',

templateUrl:'./app.component.html',

styleUrl:'./app.component.scss'

})

export class AppComponent{

title='CrackIT';

}

`

},

{

name:"app.component.html",

language:"html",

code:`

<h1>{{title}}</h1>

<button>

Click Me

</button>

`

},

{

name:"app.component.scss",

language:"scss",

code:`

h1{

color:#6D28D9;

}

button{

padding:12px;

}

`

}

]

}

]