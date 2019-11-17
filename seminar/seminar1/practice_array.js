var arr1 = [];
console.log(arr1);
console.log(typeof arr1);

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['윤희성', 3, 4.5, false, {name: 'heesung', part: 'server'}];
console.log(arr3);
console.log(typeof arr3);

// array 기본 함수
console.log('[array 기본 함수]')
var arr = [1,2,3,4,5];
var tmp = [];
// 1. length 함수
console.log('length: ' + arr.length);

// 2. shift 함수 unshift 하게 되면 오른쪽으로 밀게될 텐데, 비워져있는 오른쪽 칸에 뭐가 채워질지.
arr.unshift(0);
console.log('after unshift: ' + arr);
arr = [1, 2, 3, 4, 5];
arr.shift();
console.log('after shift: ' + arr);
arr = [1, 2, 3, 4, 5];

// 3. push & pop 함수
arr.push('new Item');
console.log('after push: ' + arr);
arr.pop();
console.log('after pop: ' + arr);

// 4. includes 함수
// 포함되어 있는지 true, false 값을 반환함.
console.log('includes(4): ' + arr.includes(4));

// 5. indexOf 함수
// 포함되어있는지,있으면 index값을 반환해줌.
console.log('indexOf: ' + arr.indexOf(4));

// 6. concat 함수
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
console.log('after concat' + arr1.concat(arr2));

// 7. join 함수
// 스트링 배열을 받았을 때, 배열 요소 사이에 특정 문자를 넣어주는 효과! 많이 쓰일 수 있음.
// 온수->역곡->소사->부천->중동->송내 값으로 출력됨.
var arrStation = ['온수','역곡','소사','부천','중동','송내'];
console.log(arrStation.join('->'));

// 8. reverse 함수
// 순서 뒤집고 join 
console.log(arrStation.reverse().join('->'));

// 9. sort 함수
console.log(arrStation.sort());

// 배열 순회

// 배열 순회 첫 번째 방법. 
// 1, 2, undefined, 4, 5 의 순서로 출력됨.
arr = [1, 2, , 4, 5];
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// undefined 생략해줌!!
for(var idx in arr){
    console.log(arr[idx]);
}

// data에 index 인덱스 값이 들어가는 게 아니라 인덱스에 해당하는 데이터 값이 들어감.
for(var data of arr){
    console.log(data);
}