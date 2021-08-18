const arry = [1, 2, 3, 4, 5];

// const forEach = () => {
//   for (let i = 0; i < arry.length; i++) {
//     console.log(arry[i]);
//   }
// };

// 配列を引数として展開する関数
const forEach = (ary, callback) => {
  for (let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
};

// 引数をログに出力する関数
const log = (val) => {
  console.log(val);
};

// 引数を２倍にする関数
const double = (val) => {
  val = val * 2;
  log(val);
};

forEach(arry, double);

forEach(arry, (val) => {
  val = val * 2;
  log(val);
});
