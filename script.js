const fortunes = [
    "大吉!運いいな！",
    "中吉🤗( ^^) _U~~",
    "小吉😇今日はゆっくりすごそう",
    "凶😭次がんばれよ"
];

const button = document.getElementById("a");
const result = document.getElementById("b");

button.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random()*fortunes.length);
    result.textContent = fortunes[(randomNumber)];  
});