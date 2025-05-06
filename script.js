const questions = [
    {
        Question: "体型 | Body Type ?",
        Answers: [
            { Text: "痩せ型 | Slim body type ", value: "A" },
            { Text: "中肉中背 | Average build ", value: "B" },
            { Text: "太りやすい | Gain weight easily ", value: "C" }
        ]
    },
    {
        Question: "肌 | Skin ?",
        Answers: [
            { Text: "乾燥しやすい | Prone to dryness ", value: "A" },
            { Text: "オイリー、ニキビができやすい | Oily, acne-prone " , value: "B" },
            { Text: "白色でしっとりしている | Moist and fair ", value: "C" }
        ]
    },
    {
        Question: "髪 | Hair ?",
        Answers: [
            { Text: "乾燥している | Dry ", value: "A" },
            { Text: "柔らかく、細い | Soft and fine ", value: "B" },
            { Text: "黒くて多い | Dark and thick", value: "C" }
        ]
    },
    {
        Question: "汗 | Sweating ?",
        Answers: [
            { Text: "あまりかかない | Sweat less ", value: "A" },
            { Text: "汗っかき | Sweat a lot " , value: "B" },
            { Text: "普通 | Normal ", value: "C" }
    ]
    },
    {
        Question: "体温 | Body Temperature ?",
        Answers: [
            { Text: "手足が冷たい | Cold hands and feet  ", value: "A" },
            { Text: "体が熱い | Body feels hot " , value: "B" },
            { Text: "全体が冷たい | Entire body feels cold ", value: "C" }
    ]
    },
    {
        Question: "睡眠 | Sleep ?",
        Answers: [
            { Text: "浅くて目覚めやすい | Light sleeper, easily awakened ", value: "A" },
            { Text: "暑くなければ良く寝れる | Sleep well unless it's hot " , value: "B" },
            { Text: "全体が冷寝るのが好きで、ずっと寝ていたいたい | Love to sleep, want to stay in bed ", value: "C" }
    ]
    },
    {
        Question: "食欲 | Appetite  ?",
        Answers: [
            { Text: "ある時とない時の差がある | Appetite varies ", value: "A" },
            { Text: "いつも食欲旺盛、食事を抜くとイライラする | Always hungry, gets irritated if skipping meals " , value: "B" },
            { Text: "食べることは好きだが 食べなくても平気 | Likes food, but okay without eating ", value: "C" }
    ]
    },
    {
        Question: "便 | Bowel Movements ?",
        Answers: [
            { Text: "便秘しやすい | Constipation-prone  ", value: "A" },
            { Text: "下痢しやすい | Prone to diarrhea  " , value: "B" },
            { Text: "普通 | Normal ", value: "C" }
    ]
    },
    {
        Question: "行動 | Activity Level  ?",
        Answers: [
            { Text: "動きは早いが、疲れやすい | Moves quickly but tires easily ", value: "A" },
            { Text: "効率的、無駄がなく動くのが好き | Efficient, hates waste, likes structured action " , value: "B" },
            { Text: "ゆっくり、マイペース | Slow, relaxed, compares with others ", value: "C" }
    ]
    },
    {
        Question: "話し方 | Speaking Style  ?",
        Answers: [
            { Text: "早口でおしゃべり、話がよく飛ぶ | Fast talker, jumps topics ", value: "A" },
            { Text: "はっきりとした鋭い口調 話し上手と言われる | Sharp and articulate, persuasive speaker " , value: "B" },
            { Text: "全体が冷寝るのが好きで、物腰柔らかくゆっくりと話す | Warm, soft-spoken, calm tone ", value: "C" }
    ]
    },
    {
        Question: "記憶 | Memory  ?",
        Answers: [
            { Text: "覚えるのも早いが、忘れるのも早い | Remembers fast but forgets quickly  ", value: "A" },
            { Text: "覚えるのも早く、自分に利があると忘れない | Remembers well when it benefits them " , value: "B" },
            { Text: "覚えるのは遅いが、一度覚えると忘れない | Learns slowly but never forgets ", value: "C" }
    ]
    },
    {
        Question: "心の状態 | Mental State ?",
        Answers: [
            { Text: "悩みが多く、注意散漫になりがち、 不安になりやすい | Worried easily, distracted, anxious  ", value: "A" },
            { Text: "イライラして、怒りやすい、 周りのことが目に入らないことも多い | Easily irritated, quick-tempered, ignores surroundings " , value: "B" },
            { Text: "動作が遅く、人と比較しがち 悲しみが深くなると、 愛情を持てなくなる | Emotionally deep, slow to act when sad ", value: "C" }
    ]
    }
];

const questionElement = document.getElementById("Question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

const resultDescriptions = {
    A: " ヴァータ | Vaatha ",
    B: " ピッタ | Pitha ",
    C: " カパ | Kapha "
};

let currentQuestionIndex = 0;
let score = { A: 0, B: 0, C: 0 };

function startQuiz() {
    currentQuestionIndex = 0;
    score = { A: 0, B: 0, C: 0 };
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.Question;

    currentQuestion.Answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        button.addEventListener("click", () => {
            score[answer.value]++; // count A/B/C
            nextButton.style.display = "block";
            disableButtons();
        });
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function disableButtons() {
    const buttons = answerButton.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();

    // Determine the dominant type
    const dominantType = Object.keys(score).reduce((a, b) => 
        score[a] > score[b] ? a : b
    );

    // Display result and description
    questionElement.innerHTML = `
    <h2 class="result-heading">Your dominant type | タイプ</h2>
    <h1 class="dominant-type">${resultDescriptions[dominantType]}</h1>
    
`;

    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
}

startQuiz();