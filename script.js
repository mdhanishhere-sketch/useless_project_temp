let currentLevel = 0;

let score = 0;

let mistakes = 0;

let reactionTimes = [];

let levelStartTime = 0;

let bananaMoveTimer = null;

const game =
    document.getElementById("game");

const progress =
    document.getElementById("progress");

const progressText =
    document.getElementById("progressText");

const levelText =
    document.getElementById("levelText");

const startButton =
    document.getElementById("startButton");

startButton.addEventListener(
    "click",
    startVerification
);
function startVerification() {

    stopBananaMovement();

    currentLevel = 1;

    score = 0;

    mistakes = 0;

    reactionTimes = [];

    updateProgress();

    showLevel1();

}
function updateProgress() {

    const percentage =
        ((currentLevel - 1) / 10) * 100;

    progress.style.width =
        percentage + "%";

    levelText.textContent =
        currentLevel + " / 10";

    progressText.textContent =
        "Human verification in progress";

}
function showLevel1() {

    levelStartTime =
        Date.now();

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🍌
            </div>

            <h2>
                Biological Object Recognition
            </h2>

            <p>
                Which object is normally considered
                a banana?
            </p>

            <div class="options">

                <button
                    class="option"
                    onclick="bananaAnswer('banana')">
                    🍌
                </button>

                <button
                    class="option"
                    onclick="bananaAnswer('chair')">
                    🪑
                </button>

                <button
                    class="option"
                    onclick="bananaAnswer('car')">
                    🚗
                </button>

                <button
                    class="option"
                    onclick="bananaAnswer('brick')">
                    🧱
                </button>

            </div>

        </div>

    `;

}
function bananaAnswer(answer) {

    if (answer === "banana") {

        score += 10;

        const reactionTime =
            Date.now() - levelStartTime;

        reactionTimes.push(
            reactionTime
        );

        showSuccess(

            "✅",

            "BANANA RECOGNITION SUCCESSFUL",

            "Basic banana recognition confirmed.",

            "Please proceed to advanced intelligence testing."

        );

    } else {

        mistakes++;

        showFailure(

            "❌",

            "INCORRECT",

            "Please reconsider your relationship with reality.",

            "TRY AGAIN",

            showLevel1

        );

    }

}
function showLevel2() {

    levelStartTime =
        Date.now();

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🧮
            </div>

            <h2>
                Extremely Advanced Mathematics
            </h2>

            <p>
                If you have 2 bananas and I give you
                3 more, how many bananas do you have?
            </p>

            <div class="options">

                <button
                    class="option"
                    onclick="mathAnswer('5')">
                    5
                </button>

                <button
                    class="option"
                    onclick="mathAnswer('23')">
                    23
                </button>

                <button
                    class="option"
                    onclick="mathAnswer('banana')">
                    Banana³
                </button>

                <button
                    class="option"
                    onclick="mathAnswer('business')">
                    Small Business
                </button>

            </div>

        </div>

    `;

}
function mathAnswer(answer) {

    if (answer === "5") {

        score += 10;

        showSuccess(

            "🧠",

            "CALCULATION SUCCESSFUL",

            "5 bananas detected.",

            "We will now pretend this was difficult."

        );

    } else {

        mistakes++;

        showFailure(

            "🤔",

            "MATHEMATICAL CONFUSION",

            "Our mathematics department is concerned.",

            "TRY AGAIN",

            showLevel2

        );

    }

}
function showLevel3() {

    levelStartTime =
        Date.now();

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🎯
            </div>

            <h2>
                Human Motor Control Verification
            </h2>

            <p>
                Click the circle.
            </p>

            <button
                style="
                    width:130px;
                    height:130px;
                    border-radius:50%;
                    background:#fff9c9;
                    border:5px solid #174f34;
                    box-shadow:0 7px 0 #174f34;
                    margin-top:15px;
                "
                onclick="circleClicked()">
            </button>

        </div>

    `;

}
function circleClicked() {

    const reactionTime =
        Date.now() - levelStartTime;

    reactionTimes.push(
        reactionTime
    );

    score += 10;

    let message;

    if (reactionTime < 500) {

        message =
            "You clicked that way too quickly. Suspicious.";

    } else if (reactionTime < 2000) {

        message =
            "Acceptable hesitation detected.";

    } else {

        message =
            "Excellent. You stared at a circle for a suspicious amount of time.";

    }

    showSuccess(

        "🎯",

        "MOTOR RESPONSE CONFIRMED",

        "Reaction time: " +
        reactionTime +
        " ms",

        message

    );

}
function showLevel4() {

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                ⚠️
            </div>

            <h2>
                Instruction Compliance Analysis
            </h2>

            <p>
                DO NOT PRESS THE BUTTON.
            </p>

            <button
                class="forbidden"
                onclick="forbiddenButton()">

                ABSOLUTELY DO NOT PRESS

            </button>

        </div>

    `;

}
function forbiddenButton() {

    score += 15;

    showSuccess(

        "🚨",

        "HUMAN BEHAVIOUR DETECTED",

        "You were specifically told not to press it.",

        "You pressed it anyway. Strong evidence of humanity."

    );

}
function showLevel5() {

    stopBananaMovement();

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🍌
            </div>

            <h2>
                Primate Reaction Assessment
            </h2>

            <p>
                Catch the banana as quickly as possible.
            </p>

            <div id="bananaArea">

                <button
                    id="movingBanana"
                    onclick="catchBanana()">

                    🍌

                </button>

            </div>

        </div>

    `;

    levelStartTime =
        Date.now();

    moveBanana();

    bananaMoveTimer =
        setInterval(
            moveBanana,
            650
        );

}
function moveBanana() {

    const banana =
        document.getElementById(
            "movingBanana"
        );

    const area =
        document.getElementById(
            "bananaArea"
        );

    if (!banana || !area) {
        return;
    }

    const maxX =
        area.clientWidth - 55;

    const maxY =
        area.clientHeight - 55;

    const x =
        Math.random() *
        Math.max(maxX, 0);

    const y =
        Math.random() *
        Math.max(maxY, 0);

    banana.style.left =
        x + "px";

    banana.style.top =
        y + "px";

}
function catchBanana() {

    const reactionTime =
        Date.now() - levelStartTime;

    reactionTimes.push(
        reactionTime
    );

    score += 20;

    stopBananaMovement();

    let reflex;

    if (reactionTime < 700) {

        reflex = "96%";

    } else if (reactionTime < 1500) {

        reflex = "87%";

    } else {

        reflex = "63%";

    }

    showSuccess(

        "🍌",

        "BANANA CAPTURED",

        "Reaction time: " +
        reactionTime +
        " ms",

        "Monkey reflex level: " +
        reflex +
        ". Life skills remain unknown."

    );

}
function stopBananaMovement() {

    if (bananaMoveTimer !== null) {

        clearInterval(
            bananaMoveTimer
        );

        bananaMoveTimer =
            null;

    }

}
function showLevel6() {

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🚪
            </div>

            <h2>
                Advanced Common Sense Test
            </h2>

            <p>
                Which object is normally used
                to enter a room?
            </p>

            <div class="options">

                <button
                    class="option"
                    onclick="commonSenseAnswer('door')">
                    🚪 Door
                </button>

                <button
                    class="option"
                    onclick="commonSenseAnswer('banana')">
                    🍌 Banana
                </button>

                <button
                    class="option"
                    onclick="commonSenseAnswer('giraffe')">
                    🦒 Giraffe
                </button>

            </div>

        </div>

    `;

}
function commonSenseAnswer(answer) {

    if (answer === "door") {

        score += 10;

        showSuccess(

            "🧠",

            "COMMON SENSE DETECTED",

            "Door selected successfully.",

            "This is getting suspiciously impressive."

        );

    } else {

        mistakes++;

        showFailure(

            "🚪",

            "THAT IS NOT A DOOR",

            "Unless you have discovered a revolutionary new architecture system.",

            "TRY AGAIN",

            showLevel6

        );

    }

}
function showLevel7() {

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🧠
            </div>

            <h2>
                Consciousness Verification
            </h2>

            <p>
                If a human knows they are taking
                a human verification test,
                are they still human?
            </p>

            <div class="options">

                <button
                    class="option"
                    onclick="consciousnessAnswer('yes')">
                    YES
                </button>

                <button
                    class="option"
                    onclick="consciousnessAnswer('no')">
                    NO
                </button>

                <button
                    class="option"
                    onclick="consciousnessAnswer('maybe')">
                    MAYBE
                </button>

                <button
                    class="option"
                    onclick="consciousnessAnswer('why')">
                    WHY?
                </button>

            </div>

        </div>

    `;

}
function consciousnessAnswer(answer) {

    score += 10;

    let message = "";

    if (answer === "yes") {

        message =
            "That's exactly what a human would say.";

    }

    else if (answer === "no") {

        message =
            "Interesting. Please contact the philosophy department.";

    }

    else if (answer === "maybe") {

        message =
            "Advanced human detected.";

    }

    else {

        message =
            "Excellent question. We also don't know.";

    }

    showSuccess(

        "🧠",

        "PHILOSOPHICAL ANALYSIS COMPLETE",

        "Your answer has been forwarded to our AI.",

        message

    );

}
function showLevel8() {

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                ⚛️
            </div>

            <h2>
                Quantum Banana Validation
            </h2>

            <p>
                What is the approximate speed of a banana
                travelling through a confused monkey's imagination?
            </p>

            <div class="options">

                <button
                    class="option"
                    onclick="quantumAnswer('a')">
                    12 km/h
                </button>

                <button
                    class="option"
                    onclick="quantumAnswer('b')">
                    300,000 km/s
                </button>

                <button
                    class="option"
                    onclick="quantumAnswer('c')">
                    Depends on monkey
                </button>

                <button
                    class="option"
                    onclick="quantumAnswer('d')">
                    This should not exist
                </button>

            </div>

        </div>

    `;

}
function quantumAnswer(answer) {

    if (answer === "d") {

        score += 15;

        showSuccess(

            "⚛️",

            "EXCELLENT",

            "You recognized an inappropriate question.",

            "Highly human behaviour detected."

        );

    } else {

        mistakes++;

        showFailure(

            "🤯",

            "THAT ANSWER SOUNDED TOO CONFIDENT",

            "A human should have questioned the existence of this question.",

            "TRY AGAIN",

            showLevel8

        );

    }

}
function showLevel9() {

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🍌
            </div>

            <h2>
                Advanced Emotional Verification
            </h2>

            <p>
                This banana has been sitting here for 3 hours.
                How do you think it feels?
            </p>

            <div class="options">

                <button
                    class="option"
                    onclick="emotionAnswer('happy')">
                    😊 Happy
                </button>

                <button
                    class="option"
                    onclick="emotionAnswer('sad')">
                    😢 Sad
                </button>

                <button
                    class="option"
                    onclick="emotionAnswer('confused')">
                    😵 Confused
                </button>

                <button
                    class="option"
                    onclick="emotionAnswer('banana')">
                    🍌 It's a banana
                </button>

            </div>

        </div>

    `;

}


function emotionAnswer(answer) {

    score += 10;

    if (answer === "banana") {

        showSuccess(

            "🍌",

            "REALITY DETECTED",

            "You correctly identified the banana as a banana.",

            "Outstanding realism."

        );

    } else {

        showSuccess(

            "😂",

            "EMOTIONAL ANALYSIS COMPLETE",

            "We appreciate your concern for the banana.",

            "The banana appreciates it too."

        );

    }

}
function showLevel10() {

    game.innerHTML = `

        <div class="question">

            <div class="question-icon">
                🧬
            </div>

            <h2>
                FINAL BIOLOGICAL CONFIRMATION
            </h2>

            <p>
                Are you human?
            </p>

            <div class="options">

                <button
                    class="option"
                    onclick="humanAnswer('yes')">
                    🟢 YES
                </button>

                <button
                    class="option"
                    onclick="humanAnswer('no')">
                    🔴 NO
                </button>

                <button
                    class="option"
                    onclick="humanAnswer('maybe')">
                    🟡 MAYBE
                </button>

            </div>

        </div>

    `;

}
function humanAnswer(answer) {

    if (answer === "yes") {

        score += 10;

        showSuccess(

            "🧍",

            "THAT IS EXACTLY WHAT A HUMAN WOULD SAY",

            "Response accepted.",

            "Unfortunately, this evidence is highly suspicious."

        );

    }

    else if (answer === "no") {

        score += 5;

        showSuccess(

            "🤖",

            "INTERESTING",

            "A self-declared non-human completed human verification.",

            "Security team has been notified."

        );

    }

    else {

        score += 15;

        showSuccess(

            "🧠",

            "ADVANCED HUMAN DETECTED",

            "Most bots answer confidently.",

            "Most humans have absolutely no idea what they're doing."

        );

    }

}
function showSuccess(
    icon,
    title,
    line1,
    line2
) {

    game.innerHTML = `

        <div class="message">

            <div class="icon">
                ${icon}
            </div>

            <h2>
                ${title}
            </h2>

            <p>
                ${line1}
            </p>

            <p>
                ${line2}
            </p>

            <button
                class="action-button"
                onclick="nextLevel()">

                CONTINUE →

            </button>

        </div>

    `;

}
function showFailure(
    icon,
    title,
    line1,
    buttonText,
    retryFunction
) {

    game.innerHTML = `

        <div class="message">

            <div class="icon">
                ${icon}
            </div>

            <h2>
                ${title}
            </h2>

            <p>
                ${line1}
            </p>

            <button
                class="action-button"
                id="retryButton">

                ${buttonText}

            </button>

        </div>

    `;

    document
        .getElementById("retryButton")
        .addEventListener(
            "click",
            retryFunction
        );

}
function nextLevel() {

    stopBananaMovement();

    currentLevel++;

    updateProgress();

    switch (currentLevel) {

        case 2:
            showLevel2();
            break;

        case 3:
            showLevel3();
            break;

        case 4:
            showLevel4();
            break;

        case 5:
            showLevel5();
            break;

        case 6:
            showLevel6();
            break;

        case 7:
            showLevel7();
            break;

        case 8:
            showLevel8();
            break;

        case 9:
            showLevel9();
            break;

        case 10:
            showLevel10();
            break;

        default:
            showFinalAnalysis();
            break;

    }

}
function showFinalAnalysis() {

    stopBananaMovement();

    progress.style.width =
        "100%";

    progressText.textContent =
        "Final behavioral analysis";

    levelText.textContent =
        "FINAL";

    game.innerHTML = `

        <div class="message">

            <div class="icon">
                🧠
            </div>

            <h2>
                ANALYZING HUMANITY...
            </h2>

            <p id="analysisText">
                Initializing behavioral engine...
            </p>

            <div class="analysis-loader">

                <div
                    class="analysis-loader-fill">
                </div>

            </div>

            <p>
                Please do not move.
            </p>

        </div>

    `;


    const messages = [

        "Analyzing mouse movement...",

        "Checking reaction patterns...",

        "Evaluating decision making...",

        "Measuring monkey compatibility...",

        "Comparing human behavior database...",

        "Consulting monkey intelligence department..."

    ];


    let index = 0;


    const analysisInterval =
        setInterval(() => {

            const text =
                document.getElementById(
                    "analysisText"
                );

            if (!text) {

                clearInterval(
                    analysisInterval
                );

                return;

            }


            text.textContent =
                messages[index];

            index++;


            if (index >= messages.length) {

                clearInterval(
                    analysisInterval
                );

                setTimeout(
                    showResult,
                    700
                );

            }

        }, 700);

}
function showResult() {

    stopBananaMovement();

    let humanProbability =
        70 +
        (score * 0.55) -
        (mistakes * 3);


    humanProbability =
        Math.max(
            1,
            Math.min(
                99.99,
                humanProbability
            )
        );


    humanProbability =
        humanProbability.toFixed(2);


    let botProbability =
        (
            100 -
            Number(humanProbability)
        ).toFixed(2);


    let averageReaction = 0;


    if (reactionTimes.length > 0) {

        const total =
            reactionTimes.reduce(
                (sum, time) =>
                    sum + time,
                0
            );

        averageReaction =
            Math.round(
                total /
                reactionTimes.length
            );

    }


    game.innerHTML = `

        <div class="message">

            <div class="icon">
                ✅
            </div>

            <h2>
                VERIFICATION COMPLETE
            </h2>


            <div class="final-report">

                <div class="stat">

                    <span>
                        Human Probability
                    </span>

                    <strong>
                        ${humanProbability}%
                    </strong>

                </div>


                <div class="stat">

                    <span>
                        Bot Probability
                    </span>

                    <strong>
                        ${botProbability}%
                    </strong>

                </div>


                <div class="stat">

                    <span>
                        Monkey Compatibility
                    </span>

                    <strong>
                        94.12%
                    </strong>

                </div>


                <div class="stat">

                    <span>
                        Banana Recognition
                    </span>

                    <strong>
                        100%
                    </strong>

                </div>


                <div class="stat">

                    <span>
                        Average Reaction
                    </span>

                    <strong>
                        ${averageReaction} ms
                    </strong>

                </div>


                <div class="stat">

                    <span>
                        Questionable Decisions
                    </span>

                    <strong>
                        ${Math.min(
                            100,
                            60 + mistakes * 8
                        )}%
                    </strong>

                </div>


            </div>


            <div class="verdict">

                🐒 YOU ARE HUMAN

            </div>


            <p>
                Humanity successfully verified.
            </p>


            <p class="final-sentence">
                you have successfully wasted your 3 minutes  of time that you can never get back thank you
            </p>


            <div class="final-buttons">

                <button
                    class="final-button"
                    onclick="restartVerification()">

                    🔄 GO BACK TO START

                </button>


                <button
                    class="final-button"
                    onclick="startMonkeyMode()">

                    🐒 MONKEY MODE

                </button>

            </div>

        </div>

    `;

}
function restartVerification() {

    stopBananaMovement();

    currentLevel = 0;

    score = 0;

    mistakes = 0;

    reactionTimes = [];

    progress.style.width =
        "0%";

    progressText.textContent =
        "Verification not started";

    levelText.textContent =
        "0 / 10";


    game.innerHTML = `

        <div id="startScreen">

            <div class="big-monkey">
                🐒
            </div>

            <h1>
                ARE YOU HUMAN?
            </h1>

            <p class="intro">
                Our highly advanced security system
                needs to determine whether you are
                actually a human.
            </p>

            <p class="warning">
                Please complete 10 scientifically
                questionable verification tests.
            </p>

            <button
                class="main-button"
                onclick="startVerification()">

                🐒 START VERIFICATION

            </button>

        </div>

    `;

}
function startMonkeyMode() {

    document.body.style.filter =
        "hue-rotate(55deg) saturate(1.5)";

    document.querySelector(
        ".verification-box"
    ).style.transform =
        "rotate(-1deg)";

    game.innerHTML = `

        <div class="message">

            <div class="icon">
                🌴🐒🌴
            </div>

            <h2>
                MONKEY MODE ACTIVATED
            </h2>

            <p>
                You have unlocked the forbidden
                primate security protocol.
            </p>

            <p>
                Bananas are now considered
                administrator privileges.
            </p>

            <p>
                Human verification has been
                temporarily suspended.
            </p>

            <div class="final-buttons">

                <button
                    class="final-button"
                    onclick="location.reload()">

                    EXIT MONKEY MODE

                </button>

            </div>

        </div>

    `;

}