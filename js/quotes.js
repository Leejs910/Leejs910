
const quotes = [


{
    quotes: "삶이 있는 한 희망은 있다",
    author: "키케로",
},
{
    quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ",
    author: "사무엘 존슨",
},
{
    quotes: "언제나 현재에 집중할 수 있다면 행복할 것이다. ",
    author: "파울로 코엘료",
},
{
    quotes: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
},
{
    quotes: "피할 수 없으면 즐겨라 ",
    author: "로버트 엘리엇",
},
{
    quotes: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가? ",
    author: "아드리스 샤흐",
},
{
    quotes: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다 ",
    author: "제임스 오펜하임",
},
{
    quotes: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨",
},
{
    quotes: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨",
},
{
    quotes: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨10",
},
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
