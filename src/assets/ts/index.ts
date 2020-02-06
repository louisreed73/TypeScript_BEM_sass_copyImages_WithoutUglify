import { Person } from './index.base';


// import 'bootstrap/js/dist/collapse.js';

// import {Person}

let {log:l}=console;

import '../scss/main_index.scss';

type es= string|number;

let luis=new Person("Luis",46,"madrid")

console.log("hola!!!!!",luis);

let title=document.querySelector("h1")!;

/* title.addEventListener("click",()=>{
    l("Bravo!!!!!!!")
}) */

let _title=title?.cloneNode(true);

// document.body.replaceChild(_title,title)

l(title);