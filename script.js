const fortunes = [
    "大吉❤素敵な出会いがあるかも！",
    "中吉🤗少しは勇気を出すといいことが起きる",
    "小吉😇今日はゆっくりすごそう",
    "凶😭無理せず慎重に行動しよう"
];

const button = document.getElementById("a");
const result = document.getElementById("b");

button.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random()*fortunes.length);
    result.textContent = fortunes[(randomNumber)];  
});