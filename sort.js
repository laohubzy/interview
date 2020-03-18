const arrList = [3,5,2,6,8,9,0]
let count = 0;
// // 冒泡排序 复杂度 n平方  稳定
// function test(arr) {
//     const len = arr.length;
//     // 次数循环
//     for(let j = 0; j < len - 1; j ++) {
//         // 逻辑循环
//         for(let i = 0; i< len - 1; i ++) {
//             count ++;
//             if(arr[i] > arr[i + 1]) {
//                 [ arr[i + 1], arr[i] ] = [arr[i], arr[i + 1]]
//                 console.log([arr[i], arr[i + 1]])
//             }
//         }
//     }

// }
// test(arrList);
// console.log(arrList);
// console.log(count);

function insertSort(arr) {
    len = arr.length;
    for(let i = 0; i<len; i++) {
        // 将已排好后一位插入到前面已经排好的数列中
        for(let o = i; o > 0; o--) {
            if(arr[o] < arr[o - 1]) {
                [arr[o - 1], arr[o]]   =  [arr[o], arr[o - 1]]
            }
        }
    }
    
}
insertSort(arrList);
console.log(arrList);
console.log(count);