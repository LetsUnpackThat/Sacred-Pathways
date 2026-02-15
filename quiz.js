// Render all questions
function renderQuestions() {
    const form = document.getElementById('quiz-form');
    
    questions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.style.animationDelay = `${index * 0.02}s`;
        
        questionCard.innerHTML = `
            <div class="question-number">Question ${question.id} of 54</div>
            <div class="question-text">${question.text}</div>
            <div class="rating-scale">
                <div class="rating-option">
                    <input type="radio" id="q${question.id}_1" name="q${question.id}" value="1" onchange="updateProgress()">
                    <label for="q${question.id}_1">1</label>
                    <div class="scale-label">Not true</div>
                </div>
                <div class="rating-option">
                    <input type="radio" id="q${question.id}_2" name="q${question.id}" value="2" onchange="updateProgress()">
                    <label for="q${question.id}_2">2</label>
                    <div class="scale-label"></div>
                </div>
                <div class="rating-option discouraged">
                    <input type="radio" id="q${question.id}_3" name="q${question.id}" value="3" onchange="updateProgress()">
                    <label for="q${question.id}_3">3</label>
                    <div class="scale-label">Avoid if possible</div>
                </div>
                <div class="rating-option">
                    <input type="radio" id="q${question.id}_4" name="q${question.id}" value="4" onchange="updateProgress()">
                    <label for="q${question.id}_4">4</label>
                    <div class="scale-label"></div>
                </div>
                <div class="rating-option">
                    <input type="radio" id="q${question.id}_5" name="q${question.id}" value="5" onchange="updateProgress()">
                    <label for="q${question.id}_5">5</label>
                    <div class="scale-label">Very true</div>
                </div>
            </div>
        `;
        
        form.appendChild(questionCard);
    });
}

// Update progress bar and enable submit button when all questions answered
function updateProgress() {
    let answeredCount = 0;
    
    for (let i = 1; i <= 54; i++) {
        const radios = document.getElementsByName(`q${i}`);
        for (let radio of radios) {
            if (radio.checked) {
                answeredCount++;
                break;
            }
        }
    }
    
    const percentage = (answeredCount / 54) * 100;
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('answered-count').textContent = answeredCount;
    
    // Enable submit button when all questions answered
    const submitButton = document.getElementById('submit-button');
    if (answeredCount === 54) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Calculate scores and redirect to results
function submitQuiz() {
    const scores = {
        'Naturalist': 0,
        'Sensate': 0,
        'Traditionalist': 0,
        'Ascetic': 0,
        'Activist': 0,
        'Caregiver': 0,
        'Enthusiast': 0,
        'Contemplative': 0,
        'Intellectual': 0
    };
    
    // Calculate scores
    questions.forEach(question => {
        const selectedValue = document.querySelector(`input[name="q${question.id}"]:checked`);
        if (selectedValue) {
            scores[question.pathway] += parseInt(selectedValue.value);
        }
    });
    
    // Store scores in sessionStorage
    sessionStorage.setItem('sacredPathwaysScores', JSON.stringify(scores));
    
    // Redirect to results page
    window.location.href = 'results.html';
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', renderQuestions);
