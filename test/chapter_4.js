/**
 * ����
 */
//方法调用模式
var myContainer = {
    value: 0,
    increment: function (value) {
        this.value += typeof value === 'number' ? value : 1;
        return this.value;
    }
}
console.log(myContainer.value);
console.log("value=" + myContainer.increment(11));
console.log('--------函数调用模式：-----------');
//函数调用模式
var add = function (a, b) {
    return a + b;
}
console.log(add(1, 2));
//
myContainer.double = function () {
    var that = this;//
    var helper = function () {
        // this.value = this.value * 2;//未改变
        that.value = that.value * 2;//改变myContainer.value
        that.value = add(that.value, that.value)//改变myContainer.value
    }
    helper();
}
myContainer.double();
console.log(myContainer.value);

console.log('---------构造器调用：----------');
//构造器调用
var foo = function (string) {
    this.value = string;
}
foo.prototype.get_value = function () {
    return this.value;//
}
console.log(foo.value)//undefined
//console.log(foo.get_value())//undefined
var myFoo = new foo("hello 你好！");
console.log(myFoo.get_value());//hello 你好！
console.log('---------构造器调用例子：----------');

//构造popup类
var popup = (function () {
    //构造带有属性的对象
    var popup = function (index, option) {//构造函数初始化属性
        this.id = index;
        this.title = option.title;
        this.img = option.img;
        this.confirm = option.confirm;
        this.cancel = option.cancel;
    };
    popup.prototype = {//增加对象属性
        id: null,
        title: null,
        img: null,
        confirm: false,
        cancel: false,

        show: function () {//添加show方法
            if (this.confirm) {
                console.log("confirm-->" + this.id + "--" + this.title + "/" + this.img + "--" + this.cancel);
            } else {
                console.log("cancel-->" + this.id + "--" + this.title + "/" + this.img + "--" + this.cancel);
            }
        }
    };
    //返回对象
    return popup;//在闭包函数中必须返回popup对象

})();
var option = {
    title: "温馨提示",
    img: "http://hello",
    confirm: false,
    cancel: false
}
var myPopup = new popup(100, option);
myPopup.show();

console.log('---------Apply调用模式：----------');
var array = [2, 99, 2];
var sum = add.apply(null, array);//第一个参数是改变this引用对象，第二个是参数数组
console.log(sum);
//定义一个新函数
var newFoo = {
    value: "I am new foo!"
}
var value = foo.prototype.get_value.apply(newFoo);
console.log(value);
//扩展Function
//String.prototype.trim = function () {
//    return "trim"
//};
//console.log("".trim());
console.log(new Date().getSeconds());
//setTimeout(function () {
//    console.log("timeout:" + new Date().getSeconds());
//}, 5000);
////闭包自执行函数
(function (date) {
    console.log("run it self:" + date.getSeconds());
})(new Date());
function closure() {
    var i = 0;
    return function (id) {
        i++;
        console.log("closure:" + i + "---" + id);
    };
}
var cc = closure();
cc(1);
cc(2);
cc(3);

var run = (function () {
    var a = 1;
    // console.log("run:"+a);
    function runA() {
        a++;
        console.log("runA:" + a);
    }

    function runB() {
        a++;
        console.log("runB:" + a);
    }

    return {
        ra: runA(),
        rb: runB()
    }
})();
var myAjax = function (url,callback) {
    return setTimeout(function () {
        callback.success("success_callback"+url);
    }, 2000);
}
myAjax("myurl",{
    success:function(data){
        console.log(data+"in");
    }
});
var i=1;
setInterval(function(){

    if(i<10){
        i++;
        console.log("i---->"+i);
    }else{
        clearInterval(this);
        console.log("clearInterval"+i);
    }
},1000);