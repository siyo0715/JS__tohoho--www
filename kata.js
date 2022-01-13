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

