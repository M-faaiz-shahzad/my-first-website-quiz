/* script.js */
function finishQuiz() {
    let score = 0;
    // Find all elements with the class "question"
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(questionDiv => {
        // Get the correct answer stored in the data attribute
        const correctAnswer = questionDiv.getAttribute('data-correct');
        // Get the unique name for this question (e.g., "q1")
        const questionName = questionDiv.getAttribute('id');
        
        // Find the checked radio button for this specific question
        const selected = document.querySelector(`input[name="${questionName}"]:checked`);
        
        // If an option is selected AND matches the correct answer
        if (selected && selected.value === correctAnswer) {
            score++;
            questionDiv.style.border = "2px solid green"; // Highlight correct
        } else {
            questionDiv.style.border = "2px solid red"; // Highlight wrong
        }
    });

    // Show the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${questions.length}!`;
    window.scrollTo(0, document.body.scrollHeight);
}