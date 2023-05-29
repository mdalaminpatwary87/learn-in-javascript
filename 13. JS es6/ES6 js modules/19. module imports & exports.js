// named import & export 
import{pi,a} from '../SECTION 125. ECMASCRIPT OR ES6/20. external.js'  
import * as test from '../SECTION 125. ECMASCRIPT OR ES6/20. external.js'
import{pi as varPi,a as varA} from '../SECTION 125. ECMASCRIPT OR ES6/20. external.js'  
console.log(pi);
console.log(a);
console.log(test);
console.log(test.pi);
console.log(varPi, varA);

// default import & export 
import external from '../SECTION 125. ECMASCRIPT OR ES6/20. external.js' 
console.log(external); 

import external,{pi,a} from '../SECTION 125. ECMASCRIPT OR ES6/20. external.js'  // default export & named export 2i tai import korte parchi
console.log(external,pi,a);

// function import & export 
import external,{myFunc}from '../SECTION 125. ECMASCRIPT OR ES6/20. external.js' 
myFunc()