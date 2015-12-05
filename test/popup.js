/**
 * Created by xian on 2015/12/5.
 */
(function () {
    //构造带有属性的对象
    var popup = function (index, option) {//传递索引和json对象
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
    return popup;

})();