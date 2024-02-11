// compare two JSON have the same properties without order

let obj1 = { name: "Person 1", age:5};
let obj2 = { age:5 ,name: "Person 1"  };

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2)

if(JSON.stringify(obj1) == JSON.stringify(obj2)) {
    console.log("equal");
}

else {
    console.log("not equal");
}