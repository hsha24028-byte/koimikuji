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
    const resultText = fortunes[(randomNumber)]
  
    result.textContent = fortunes[(randomNumber)];  
  
    if (resultText.includes("超大吉")){
        result.style.color ="yellow";
       }
    else if(resultText.includes("小凶")){
        result.style.color ="black"
    }
       else {result.style.color ="green";
    }

});

