//5月24日
console.log("ハロー！");

console.log(1+2);
console.log(2-1);
console.log(2*3);
console.log(4/2);

console.log(1+2+3);
console.log(1+4/2);

console.log(10/(2* -5+12));

let animal="にゃーん";
console.log(animal);
animal="ねこ";
console.log(animal);

//5月27日
let text=prompt("入力してね");
console.log(text);

let text=prompt("好きな食べ物");
console.log(`好きな食べ物は${text}です`);
//テンプレートリテラルを用いる場合、文字列全体を囲むのは” ”ではなく｀｀でないとダメ

let price=prompt(`値段を入力してね`);
console.log(parseInt(price)+8);

console.log(`昭和`,`平成`,`令和`);

isNaN(555);
isNaN(`あいうえお`);

let animal=prompt(`入力`);
console.log(isNaN(animal));

let text=prompt(`好きな数字`)
if(! isNaN(text)){
	console.log(parseInt(text)*2);
}

let number=prompt(`選択肢の数字`)
if(! isNaN(number)){
	console.log(`あなたが選んだのは${number}番です`);
}else{
	console.log(`数字で回答してください`);
}

console.log(3<9);

let years_old=prompt(`年齢を入力してください`);
let age=parseInt(years_old);
if(age>29) {
	console.log(`多分あなたは平成生まれではありません`)
}else{
	console.log(`あなたは平成生まれか令和生まれです`)
}
//promptメソッドの戻り値は常にstring型(文字列)だから、数値として比較するなら、parseInt関数を使って整数に変換する

let number=prompt(`1から12の中から数字を選んでください`);
let month=parseInt(number);
if(month<7){
	console.log(`上半期ですね`);
}else if(month<13){
	console.log(`下半期ですね`);
}else{
	console.log(`1から12の中から数字を選んでください`);
}

let number=prompt(`年の差は？`);
if(! isNaN(number)){
	let age=parseInt(number);
	if(age>12){
		console.log(`干支一回り以上だね`);
	}
}





































