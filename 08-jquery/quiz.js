$(document).ready(function () {

    // --- Quiz Data Structure ---
    const quizData = [
        {
            id: 1,
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "Which jQuery method is used to hide selected elements?",
            options: [
                ".visible(false)",
                ".hidden()",
                ".hide()",
                ".display('none')"
            ],
            correctAnswer: 2
        },
        {
            id: 3,
            question: "Which property is used to change the background color in CSS?",
            options: [
                "color",
                "bgcolor",
                "background-color",
                "bg-color"
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "How do you write 'Hello World' in an alert box in JavaScript?",
            options: [
                "msg('Hello World');",
                "alertBox('Hello World');",
                "msgBox('Hello World');",
                "alert('Hello World');"
            ],
            correctAnswer: 3
        },
        {
            id: 5,
            question: "Which sign does jQuery use as a shortcut for jQuery?",
            options: [
                "%",
                "?",
                "$",
                "#"
            ],
            correctAnswer: 2
        }
    ];

    // --- State Variables ---
    let currentQuestionIndex = 0;
    let userAnswers = new Array(quizData.length).fill(null); // Store indices of selected answers
    let score = 0;
    let timerInterval;
    const TIME_PER_QUESTION = 30;
    let timeRemaining = TIME_PER_QUESTION;

    // --- DOM Elements ---
    const $loadingScreen = $('#loading-screen');
    const $quizScreen = $('#quiz-screen');
    const $resultScreen = $('#result-screen');

    const $questionText = $('#question-text');
    const $optionsContainer = $('#options-container');
    const $progressBar = $('#progress-bar');
    const $currentQNum = $('#current-q-num');
    const $totalQNum = $('#total-q-num');
    const $timerDisplay = $('#timer');
    const $timerContainer = $('.timer-container');

    const $btnNext = $('#btn-next');
    const $btnPrev = $('#btn-prev');
    const $btnSubmit = $('#btn-submit');
    const $btnRestart = $('#btn-restart');
    const $probIndicators = $('#prob-indicators');

    // --- Initialization ---
    function init() {
        // Simulate AJAX request
        setTimeout(() => {
            $loadingScreen.fadeOut(500, function () {
                $quizScreen.removeClass('d-none').hide().fadeIn(500);
                startQuiz();
            });
        }, 1500);
    }

    function startQuiz() {
        // Reset State
        currentQuestionIndex = 0;
        userAnswers.fill(null);
        score = 0;

        // Initial Render
        $totalQNum.text(quizData.length);
        generateIndicators();
        loadQuestion(currentQuestionIndex);
    }

    // --- Core Functions ---

    function loadQuestion(index) {
        clearInterval(timerInterval);
        timeRemaining = TIME_PER_QUESTION;
        updateTimerDisplay();
        startTimer();

        // Animation: Slide out current content slightly? 
        // Simple fade effect for smooth transitions
        $('.quiz-content').fadeOut(200, function () {

            const question = quizData[index];
            $questionText.text(question.question);

            // Render Options
            $optionsContainer.empty();
            question.options.forEach((opt, i) => {
                const $optBtn = $(`<div class="option-item" data-index="${i}">${opt}</div>`);

                // Restore previous selection if exists
                if (userAnswers[index] === i) {
                    $optBtn.addClass('selected');
                }

                $optionsContainer.append($optBtn);
            });

            // Update UI
            $currentQNum.text(index + 1);
            updateProgressBar();
            updateNavButtons();

            // Highlight indicator
            $('.indicator-dot').removeClass('active');
            $(`.indicator-dot[data-index="${index}"]`).addClass('active');

            $('.quiz-content').fadeIn(200);
        });
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
        $progressBar.css('width', `${progress}%`);
    }

    function updateNavButtons() {
        if (currentQuestionIndex === 0) {
            $btnPrev.prop('disabled', true);
        } else {
            $btnPrev.prop('disabled', false);
        }

        if (currentQuestionIndex === quizData.length - 1) {
            $btnNext.addClass('d-none');
            $btnSubmit.removeClass('d-none');
        } else {
            $btnNext.removeClass('d-none');
            $btnSubmit.addClass('d-none');
        }
    }

    function generateIndicators() {
        $probIndicators.empty();
        quizData.forEach((_, i) => {
            const $dot = $(`<div class="indicator-dot" data-index="${i}"></div>`);
            $probIndicators.append($dot);
        });
    }

    // --- Timer Logic ---
    function startTimer() {
        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay();

            if (timeRemaining <= 10) {
                $timerContainer.addClass('pulse');
            } else {
                $timerContainer.removeClass('pulse');
            }

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                handleTimeOut();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const formatted = timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining;
        $timerDisplay.text(formatted);
    }

    function handleTimeOut() {
        // Auto-move to next or just stop?
        // Let's just visually indicate time is up and maybe lock answers?
        // For this quiz, let's just move to next if not last, else submit
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            submitQuiz();
        }
    }

    // --- Event Handlers ---

    // Suggest Option
    $optionsContainer.on('click', '.option-item', function () {
        const selectedIdx = $(this).data('index');

        // Visual Update
        $('.option-item').removeClass('selected');
        $(this).addClass('selected');

        // Save Answer
        userAnswers[currentQuestionIndex] = selectedIdx;

        // Mark indicator as 'completed' (visual cue that q is answered)
        $(`.indicator-dot[data-index="${currentQuestionIndex}"]`).addClass('completed');
    });

    // Validations (prevent moving next without selection?)
    // Requirement doesn't strict enforce, but it's good UX.
    // For now, allow skipping (keeps it simple).

    $btnNext.on('click', function () {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    });

    $btnPrev.on('click', function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    // Jump to question via indicators
    $probIndicators.on('click', '.indicator-dot', function () {
        const idx = $(this).data('index');
        currentQuestionIndex = idx;
        loadQuestion(currentQuestionIndex);
    });

    $btnSubmit.on('click', submitQuiz);

    function submitQuiz() {
        clearInterval(timerInterval);

        // Calculate Score
        score = 0;
        quizData.forEach((q, i) => {
            if (userAnswers[i] === q.correctAnswer) {
                score++;
            }
        });

        const percent = Math.round((score / quizData.length) * 100);

        // Render Results
        $('#score-text').text(`${score}/${quizData.length}`);
        $('#score-percent').text(`${percent}%`);

        // Conic Gradient for score circle
        // var(--success-color) approx #10b981
        $('.score-circle').css('background', `conic-gradient(#10b981 ${percent}%, transparent 0%)`);

        // Generate Review
        const $reviewList = $('#review-list');
        $reviewList.empty();

        quizData.forEach((q, i) => {
            const userAnsIdx = userAnswers[i];
            const isCorrect = userAnsIdx === q.correctAnswer;
            const statusClass = isCorrect ? 'correct' : 'incorrect';
            const userAnsText = userAnsIdx !== null ? q.options[userAnsIdx] : 'Skipped';
            const correctAnsText = q.options[q.correctAnswer];

            const html = `
                <div class="review-item ${statusClass}">
                    <div style="font-weight:600; margin-bottom:4px;">${i + 1}. ${q.question}</div>
                    <div style="color:rgba(255,255,255,0.7); font-size:0.85em;">
                        Your Answer: <span style="color:white;">${userAnsText}</span>
                        ${!isCorrect ? `<br>Correct Answer: <span style="color:#10b981;">${correctAnsText}</span>` : ''}
                    </div>
                </div>
            `;
            $reviewList.append(html);
        });

        // Switch Screens
        $quizScreen.fadeOut(300, function () {
            $quizScreen.addClass('d-none');
            $resultScreen.removeClass('d-none').hide().fadeIn(300);
        });
    }

    $btnRestart.on('click', function () {
        $resultScreen.fadeOut(300, function () {
            $resultScreen.addClass('d-none');
            $quizScreen.removeClass('d-none').hide().fadeIn(300);
            startQuiz();
        });
    });

    // Start App
    init();

});
