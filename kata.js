// undefined
//____________________________________________________________________

// var a;
// console.log(a)

// var a = 123;
// a = undefined;

// var d = {x:123, y:456};
// delete d.x;

// console.log(d.y)


//________________________________________________________________________

// Object
//________________________________________________________________________


// var obj = {
//   width: 160,
//   height: 120
// };
// console.log(obj)
// console.log(obj.width);   // => 160
// console.log(obj.height);  // => 120


// 親オブジェクトを作成する
// function parentObj() {};
// parentObj.prototype.width = 160;
// parentObj.prototype.height = 120;

// // 子オブジェクトを作成する
// function childObj() {}
// childObj.prototype = Object.create(parentObj.prototype);
// console.log(childObj.prototype);

// // なにも継承しない純粋なオブジェクトを作成する
// var obj = Object.create(null);


// // プロパティを追加する
// Date.prototype.tzname = "(unknown)";
// var date1 = new Date();
// console.log(date1.tzname);

// // メソッドをオーバーライドする
// Date.prototype.toString = function() {
//   return(this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日"
//        + this.getHours() + "時" + this.getMinutes() + "分" + this.getSeconds() + "秒");
// }
// var date2 = new Date();
// console.log(date2.toString());      // => 2019年3月24日16時31分12秒

// // プロトタイプを継承するオブジェクトを作成する
// var date3 = Object.create(Date.prototype);

// var proto = {x:100, y:200};
// var obj = Object.create(proto);
// var proto2 = Object.getPrototypeOf(obj);
// console.log(proto2);           // => {x:100, y:200}

// var proto = {
//   hello: function() { console.log("Hello!!"); }
// }
// var obj = {x:100, y:200};
// Object.setPrototypeOf(obj, proto);
// console.log(obj);              // => {x:100, y:200}
// obj.hello();

// var obj = {x:100, y:200};
// console.log(Object.keys(obj)); 

// var date = new Date();
// document.write(date.toString());

// var date = new Date();
// console.log(date.toLocaleString());

// var obj = {x:100, y:200};
// document.write(obj.constructor);

// var target = { a: 1, b: 2 }
// var obj1 = { c: 3, d: 4 }
// var obj2 = { e: 5, f: 6 }
// Object.assign(target, obj1, obj2);
// console.log(target);

// var num = new Number(12.345);
// console.log(num);            // => Number {12.345}
// console.log(num.valueOf());

// var user = {
//   _name: '',
//   set name(name) {      // setter関数
//     console.log("Set name : " + name);
//     this._name = name;
//   },
//   get name() {          // getter関数
//     console.log("Get name : " + this._name);
//     return this._name;
//   }
// }
// user.name = "Tanaka";   // => Set name : Tanaka
// user.name;       // => Get name : Tanaka




// ____________________________________________________________________
// 関数
//_____________________________________________________________________


function toSeconds(hour, min = 0, sec = 0) {
  var answer = hour * 3600 + min * 60 + sec;
  return(answer);
}
var sec = toSeconds(2);   // => 7200

console.log(sec)
//////////////////////////////////////////////////////////////////////////////
function func(a, b, c, ...rest) {
  document.write(a, b, c, rest);        // => 1, 2, 3, [4, 5, 6]
}
func(1, 2, 3, 4, 5, 6);


///////////////////////////////////////////////////////////////////////////////
// xx = 5;               // グローバル変数 xx に 5 を代入
// yy = 5;               // グローバル変数 yy に 5 を代入

// func();               // 関数 func() を呼び出す

// alert("xx = " + xx);  // グローバル変数 xx を表示（5 が表示される）
// alert("yy = " + yy);  // グローバル変数 yy を表示（8 が表示される）

// function func() {
//    var xx = 8;        // ローカル変数 xx に 8 を代入
//    yy = 8;            // グローバル変数 yy に 8 を代入
// }
////////////////////////////////////////////////////////////////////////////////////
// グローバルオブジェクトのname属性
this.name = "Tanaka";

// moduleオブジェクトのname属性
var module = {
  name: "Yamada",
  getName: function() { return this.name; }
};
console.log(module)
// moduleオブジェクトのname属性が参照される
console.log(module.getName());                 // "Yamada"
// グローバルコンテキストのため、thisはグローバルオブジェクトとなる
var retrieveName = module.getName;
console.log(this.name)
console.log(retrieveName());                   // "Tanaka"

// thisにmoduleを割り当てた状態で retrieveName() を呼び出す
var boundGetName = retrieveName.bind(module);
console.log(boundGetName());                   // "Yamada"

/////////////////////////////////////////////////////////////////////////////////////////
setTimeout(function() {
    document.write("Callback function called!!");
}, 2000);
/////////////////////////////////////////////////////////////////////////////////////////
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return (n * factorial(n - 1));
}
console.log(factorial(5));

/////////////////////////////////////////////////////////////////////////////////////
function MyClass() {
  window.setTimeout(function() { console.log(this) }, 1000); // Window オブジェクト
  window.setTimeout(() => { console.log(this) }, 1000);      // MyClass オブジェクト
}
new MyClass();

function func(a, b) {
  var func1 = function(a, b) { console.log(arguments); }
  func1(1, 2);    // [1, 2]
  var func2 = (a, b) => { console.log(arguments); }
  func2(3, 4);    // [5, 6]
}
func(5, 6);


//////////////////////////////////////////////////////////////////////////////////////////
//Symble
//_______________________________________________________________________________________
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym1 === sym2);

