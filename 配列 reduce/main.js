const arry = [1, 2, 3, 4, 5];

// 前のループの戻り値がaccuに入ってくる
// 第２引数で初期値を決める
arry.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu * curr;
}, 10);

const str = 'animation';

const strArry = str.split('');

console.log(strArry);

// 一回目のループで空文字が渡ってくるので最初のaもちゃんと<a>になる
// 配列に何か処理をして結合したりする時にreduceを使う
// const result = strArry.reduce((accu, curr) => {
//   return accu + '<' + curr + '>';
// }, '');

// console.log(result);

// この書き方でも結果は一緒
const result = strArry.reduce((accu, curr) => {
  return `${accu}<${curr}>`;
}, '');

console.log(result);
