const fortunes = [
    "超大吉だ！！ほんまえぐいっすわ！",
    "大吉！！運いいね",
    "中吉🤗( ^^) _U~~",
    "小吉😇今日はゆっくりすごそう",
    "凶😭次がんばれよ",
    "小凶　小凶ハンパないって"
];

const button = document.getElementById("a");
const result = document.getElementById("b");

button.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random()*fortunes.length);
    if (result="超大吉だ！！ほんまえぐいっすわ！"){result.style.color ="yellow"};
    result.textContent = fortunes[(randomNumber)];  
});

