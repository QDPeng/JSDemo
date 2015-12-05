/**
 * Created by xian on 2015/12/5.
 */
var test = {
    "first_name": "liu",
    "last_name": "sun",
    "age": 22,
    "is_boy": true,
    "height": 180.10
}
test.age = 100;
console.log(test.first_name + "--" + test["age"] + "--" + test.height);
console.log(typeof test.height);//number
console.log(typeof test);//object
console.log(test.school);//undefined
test.school = "buaa";
console.log(test.school);//buaa
console.log(test.toString());//[object Object]
console.log(test.hasOwnProperty("is_boy"));//true
console.log("------------------------");//true
for (var name in test) {
    console.log(name);
}
var run = function (speed) {
    console.log("run in " + speed + "km/h");
}
test.run = run;
test.run(100);
console.log("------------------------");//true
for (var name in test) {
    console.log(name);
}