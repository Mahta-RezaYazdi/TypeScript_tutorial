let click: 'click';

click = 'click';
// click = 'something elese'; Compile error


// let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';

type StringLiteral = "click" | "dblclick" | "mouseup" | "mousedown";

let mouseEvent: StringLiteral = "click";

console.log(mouseEvent);

mouseEvent = "mousedown";

console.log(mouseEvent);