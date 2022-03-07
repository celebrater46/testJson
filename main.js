"use strict";

// const getJson = () => {
//     // const href = location.href; // https://enin-world.sakura.ne.jp/index.html
//     // const pathname = location.pathname; // /index.html
//     // const jsonPath = href.replace(pathname, "") + "/test.json";
//     fetch("./test.json")
//         .then(response => {
//             return response.json();
//         });
// }
//
// // getJson();
// console.log(getJson());


const output = (result) => {
    console.log("output(): ");
    console.log(result); // succeeded
}

// fetch 自体は Promise を返す
// const data = fetch("./test.json")
const data = fetch("./test.txt")
    .then((response) => {
        // return response.json()　//ここでBodyからJSONを返す
        return response.text()　// txt でも .text() でいける模様
    })
    .then((result) => {
        output(result);  //取得したJSONデータを関数に渡す
    })
    .catch((e) => {
        console.log(e)  //エラーをキャッチし表示
    })

console.log(data);　//コンソールに"Promise"と表示される

// Chrome ブラウザをデベロッパーモードで起動していないと CORS エラーとなる