// const hello = (callback) => {
//   console.log('hello' + callback());
// };

// const getName = () => {
//   return 'Tanaka';
// };

// hello(getName);

// hello(() => {
//   return 'Tanaka';
// });

// hello(() => 'Tanaka');

// コールバック関数を受け取り'bye'を追加して出力する高階関数
const bye = (callback, lastName) => {
  console.log('bye' + callback(lastName));
};

// 即時関数 引数を'Tanaka'と結合して出力する無名関数に'Taro'を渡して実行している。
// 下のbye()の中で使用している無名関数とほぼ同等の関数の実行を確認する為に使用。
((name) => console.log('Tanaka' + name))('Taro');

// callback関数にnameを引数として'Tanaka'と結合して値を返す無名関数
// 第２引数(lastName)に'Taro'を渡す
bye((name) => {
  return 'Tanaka' + name;
}, 'Taro');

// 2つの引数をコールバック関数で処理して出力する高階関数
const doSomeThing = (num1, num2, callback) => {
  const result = '結果:' + callback(num1, num2);
  console.log(result);
};

// 引数を2つ受け取りかけ合わせる関数
const multiply = (a, b) => {
  return a * b;
};

// 引数を２つ受け取り足し合わせる感関数
const plus = (a, b) => {
  return a + b;
};

doSomeThing(2, 3, multiply);
doSomeThing(5, 19, plus);
