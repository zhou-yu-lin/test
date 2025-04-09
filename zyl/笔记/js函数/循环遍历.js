/**数组循环遍历 
 * 使用 for 循环遍历数组
 */
let arr = [1,2,3]
for (let i = 0; i< arr.length; i++){
    //console.log(arr[i])
}
/**
 * 使用 forEach 循环遍历数组
 */
let arr1 = [1,2,3,4,]
arr1.forEach(function(item){
    //console.log(item)
})
/**
 * 使用 for...in 遍历对象的键（属性）
 */
let obj = { name: "Alice", age: 25, city: "New York" };
for (let key in obj) {
    console.log(key);
    console.log(key+':'+obj[key]); // 输出属性和值
    //console.log(obj[key]);// 输出值
}
/**
 * 使用 for...of 遍历数组或可迭代对象（如 Set、Map 等）
 */
let arr2 = [1, 2, 3, 4, 5];
for (let value of arr) {
    //console.log(value); // 输出每一个元素
}
/**
 * 使用 map 方法遍历并返回新数组
 */
let arr3 = [1, 2, 3, 4, 5];
let newarr3 = arr3.map(function(item) {
    return item * 2;
});
console.log(newarr3);
