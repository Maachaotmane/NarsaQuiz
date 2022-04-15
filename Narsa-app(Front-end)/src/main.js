const quizData = [
{
    question: "التامين الادنى الاجباري على السيارة يسمى",
    image:"./images/1.png",
    a: "المسؤولية المدنية",
    b: "المسؤولية الحركية",
    correct: "a",
  },
  {
    question: "مستوى السائل في هده البطارية مضبوط",
    image:"./images/2.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "هاد الحمولة ماخصهاش تجاوز فالخلف اكثر من",
    image:"./images/3.png",
    a: "1 متر",
    b: "3 متر",
    correct: "b",
  },
  {
    question: "المسلك لي على ليمن هو ",
    image:"./images/4.png",
    a: "مسلك الدراجات",
    b: "مكان مخصص للتوقف",
    correct: "a",
  },
  {
    question: "عند وجود هاد العلامة من الواجب علي",
    image:"./images/5.png",
    a: "نقص من السرعة",
    b: "مانرميش بقايا السجائر",
    correct: "b",
  },
  {
    question: "متعن مزيان فالصورة",
    image:"./images/6.png",
    a: "ندوز انا الاول",
    b: "نسمح بالمرور لهاد السيارة",
    correct: "a",
  },
  {
    question: "الاقراص و صفائح الحصر لازم ديما يتغيرو فوقت واحد",
    image:"./images/7.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "مجموع الوزن مع الحمولة هو 500 كلغ. باش نسوق خاصني بيرمي ب و ه ",
    image:"./images/8.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "مسموح لي نستمر فالسير بهاد العجلة بالنسية للمسافات القصيرة",
    image:"./images/9.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "نستعمل المنبه ",
    image:"./images/10.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "ماء التبريد كافي",
    image:"./images/11.png",
    a: "نعم",
    b: "لا",
    correct: "a",
  },
  {
    question: "من الواجب نبدل مساحات الزجاج ملي تبدا تخلي الاثار ",
    image:"./images/12.png",
    a: "نعم",
    b: "لا",
    correct: "a",
  },
  {
    question: "من الواجب نراقب الاضواء الخلفية",
    image:"./images/13.png",
    a: "نعم",
    b: "لا",
    correct: "a",
  },
  {
    question: "هاد العلامة كتعلم على",
    image:"./images/14.png",
    a: "مكان ممر الراجلين",
    b: "ممر الراجلين على بعد 50 متر",
    correct: "a",
  },
  {
    question: "غادي بسرعة 60 كلم في الساعة",
    image:"./images/15.png",
    a: "نبقى غادي بيها",
    b: "ننقص",
    correct: "b",
  },
  {
    question: "هاد العلامة كتعلمني",
    image:"./images/16.png",
    a: "الطريق مقطوعة",
    b: "الطريق منحرفة",
    correct: "b",
  },
  {
    question: "هاد العلامة كتعلم على ممر السكة الحديدية",
    image:"./images/17.png",
    a: "بالحواجز",
    b: "بدون حواجز",
    correct: "a",
  },
  {
    question: "كنسوق شاحنة صغيرة, يمكن لي نكمل السير فالطريق الموجودة على ليمن",
    image:"./images/18.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "غادي بسرعة 40 كلم في الساعة. واجب علي نقص من السرعة",
    image:"./images/19.png",
    a: "لا",
    b: "نعم",
    correct: "a",
  },
  {
    question: "من الواجب عليا ننحاز لاقصى اليمين",
    image:"./images/20.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "كنسوق ب 40 كلم فالساعة. يمكن لي نزيد فالسرعة ديالي",
    image:"./images/21.png",
    a: "نعم",
    b: "لا",
    correct: "a",
  },
  {
    question: "باش نتجاوز. يمكن لي نستعمل الممر لي فالوسط",
    image:"./images/22.png",
    a: "نعم",
    b: "لا",
    correct: "a",
  },
  {
    question: "يمكن لي التوقف على طول الرصيف",
    image:"./images/23.png",
    a: "ديال ليمن",
    b: "ديال ليسر",
    correct: "b",
  },
  {
    question: "انا متوقف فمكان مناسب",
    image:"./images/24.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "يمكن لي التوقف على الجنب ليمن ديال الطريق مباشرة من بعد راس العقبة",
    image:"./images/25.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "هاد السيارة فوضعية مناسبة للتوقف",
    image:"./images/26.png",
    a: "لا",
    b: "نعم",
    correct: "a",
  },
  {
    question: "يمكن لي التوقف بين هاد زوج سيارات زورق",
    image:"./images/27.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "هاد الشاحنة واقفة بالشكل الصحيح",
    image:"./images/28.png",
    a: "نعم",
    b: "لا",
    correct: "b",
  },
  {
    question: "",
    image:"./images/29.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/30.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/31.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/32.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/33.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/34.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/35.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/36.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/37.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/38.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/39.png",
    a: "",
    b: "",
    correct: "b",
  },
  {
    question: "",
    image:"./images/40.png",
    a: "",
    b: "",
    correct: "b",
  }
];

const quiz = document.getElementById("quiz");
const image = document.getElementById("image");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const submitBtn = document.getElementById("submit");
const timer = document.getElementById("timer");

//countdown timer function
let seconds =6;
function  timerInterval() {
  setInterval(function() {
    seconds--;
    timer.textContent = seconds + " seconds left";
  
    if (seconds === 0) {
      clearInterval(timerInterval());
      //click submit button to show result
      submitBtn.click();
  
    }
  
  }, 1000);
} 



let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    image.innerHTML = `<img class="imageQuiz" src="${currentQuizData.image}" alt="">`;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);

    
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }else{
          answerEls.forEach(answerEl => answerEl.checked = false);
          answer=null;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer !== null) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML= `
                <h2>You Answered ${score} / ${quizData.length} questions correctly</h2>

                <button onClick="location.reload()">Reload</button>
                <a href="landing_page.html">Home</a>
            `
        }
    }else{
      currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML= `
                <h2>You Answered ${score} / ${quizData.length} questions correctly</h2>

                <button onClick="location.reload()">Reload</button>
                <a href="landing_page.html">Home</a>
            `
        }
    }
})