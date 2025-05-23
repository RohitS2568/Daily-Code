var user = {
    name:"XYZ",
    age: 25
}

console.log(user);


const str = "a.b.c.d.e";
const strArr = str.split(".");
const obj = strArr.reduceRight((acc, next) => ({ [next]: acc }));

console.dir(obj, { depth: null });