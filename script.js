const questions = [
  ["Skip numbers divisible by 3 or 5", "Print numbers from 1 to 100. Skip numbers divisible by 3 or 5, unless they are divisible by both.", "Use % and continue."],
  ["Letter grade", "Ask for a score from 0 to 100. Print the letter grade using A/B/C/D/F ranges. Also print \"With Honors\" if the score is 95 or above, and \"Invalid input\" if it is out of range.", "Use if, else if, and else."],
  ["Sum of digits", "Print numbers from 1 to 150. Skip any number where the sum of its digits is divisible by 4.", "Use % 10 and / 10 to get each digit."],
  ["Average of three scores", "Ask for three test scores. Print the average. Label the result Passed if the average is 75 or above and all three scores are at least 60. Otherwise print Failed.", "Use an average variable and &&."],
  ["Multiply by 2", "Ask for a starting number and a limit. Keep multiplying the number by 2 and print each result, but stop as soon as the result becomes divisible by 7.", "Use while, multiplication, and break. The limit is an upper stopping boundary."],
  ["Skip even numbers", "Print numbers from 1 to 200. Skip numbers divisible by 2 unless they are also divisible by 5, in which case print them anyway.", "Use && and continue."],
  ["Count numbers divisible by 2 and 3", "Print numbers from 1 to 50 that are divisible by both 2 and 3, and count how many there are.", "Use a count variable."],
  ["Stop at a multiple of 7", "Keep printing numbers starting from 1. Stop when you reach a multiple of 7 that is greater than 40.", "Use while and break."],
  ["Multiply until 1000", "Start at 2 and keep multiplying by 2. Print each value and stop before exceeding 1000. At the end, print how many times you multiplied.", "Use while and count++."],
  ["Skip numbers ending in 7", "Print numbers from 1 to 50, but skip any number whose last digit is 7.", "Use i % 10."],
  ["Parking fee", "Ask for the number of hours parked. The first 2 hours are free. Every hour after that costs 20 pesos, but any total exceeding 200 pesos is capped at 200.", "Use if and calculate the fee."],
  ["Skip divisible by 4", "Print numbers from 1 to 120. Skip any number divisible by 4 unless it is greater than 100, in which case print it anyway.", "Use && and continue."],
  ["Subtract 7", "Ask for a starting number. Keep subtracting 7 and print each result, but stop as soon as the result becomes negative or divisible by 5.", "Use while and ||."],
  ["Same first and last digit", "Print numbers from 1 to 80. Skip any number where the first digit and last digit are the same (for example, 11, 22, 33).", "Use % 10 and repeated division by 10."],
  ["Add 3", "Ask for a number. Keep adding 3 to it and print each result, but stop as soon as the result becomes a multiple of both 4 and 6.", "Use && and break."],
  ["Digit sum greater than 10", "Print numbers from 1 to 100, but skip any number where the digit sum is greater than 10.", "Use a loop to add the digits."],
  ["Skip multiples of 9", "Ask for two numbers. Print all numbers between them (inclusive), but skip any number divisible by 9, and count how many were skipped.", "Use count++ and continue."],
  ["Skip even multiples of 3", "Print numbers from 1 to 60, but skip any number that is a multiple of 3 unless it is also odd, in which case print it anyway.", "Use % 2 and % 3."],
  ["Divide by 2", "Ask for a starting number. Keep dividing it by 2 using integer division and print each result, stopping once the result reaches 1 or below.", "Use num = num / 2."],
  ["Compare first and last digits", "Print numbers from 1 to 90, but skip any number where the first digit is greater than the last digit.", "Find the first digit using repeated division."],
  ["Subtract 4", "Ask for a number. Keep subtracting 4 from it and print each result, but stop as soon as the result is divisible by 6 or drops below 0.", "Use || and break."],
  ["Skip divisible by 5", "Print numbers from 1 to 100, but skip any number divisible by 5 unless it is also divisible by 3, in which case print it anyway.", "Use && and !=."],
  ["Add 6 until target", "Ask for a starting number and a target number. Keep adding 6 to the starting number and print each result, stopping once it reaches or passes the target. Print how many additions were made.", "Use a counter."],
  ["Odd digit sum", "Print numbers from 1 to 70, but skip any number where the digit sum is an even number.", "Check sum % 2."],
  ["Same two digits", "Ask for two numbers. Print all numbers between them (inclusive), but skip any number where both digits are the same (for example, 11, 22, 33), and count how many were printed.", "Check the tens digit and ones digit."],
  ["Multiply by 3", "Ask for a starting number. Keep multiplying it by 3 and print each result, stopping as soon as the result exceeds 2000. Print how many multiplications were made.", "Use while and count."],
  ["Skip divisible by 6", "Print numbers from 1 to 100, but skip any number divisible by 6 unless it is greater than 80, in which case print it anyway.", "Use && and continue."],
  ["Add 5", "Ask for a number. Keep adding 5 to it and print each result, but stop as soon as the result becomes divisible by both 3 and 4.", "Use && and break."],
  ["Last digit greater than first", "Print numbers from 1 to 60, but skip any number where the last digit is greater than the first digit.", "Find the first and last digits."],
  ["Skip divisible by 4 and count", "Ask for two numbers. Print all numbers between them (inclusive), but skip any number divisible by 4, and print the total count of numbers that were printed.", "Use count++ and continue."]
];

const solutions = [
`#include <stdio.h>
int main() {
    int i;
    for(i = 1; i <= 100; i++) {
        if((i % 3 == 0 || i % 5 == 0) && i % 15 != 0)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int score;
    printf("Enter score: ");
    scanf("%d", &score);
    if(score < 0 || score > 100)
        printf("Invalid input");
    else if(score >= 95)
        printf("A - With Honors");
    else if(score >= 90)
        printf("A");
    else if(score >= 80)
        printf("B");
    else if(score >= 75)
        printf("C");
    else if(score >= 60)
        printf("D");
    else
        printf("F");
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i, n, sum;
    for(i = 1; i <= 150; i++) {
        n = i;
        sum = 0;
        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }
        if(sum % 4 == 0)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    float a, b, c, average;
    printf("Enter 3 scores: ");
    scanf("%f %f %f", &a, &b, &c);
    average = (a + b + c) / 3;
    printf("Average: %.2f\\n", average);
    if(average >= 75 && a >= 60 && b >= 60 && c >= 60)
        printf("Passed");
    else
        printf("Failed");
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num, limit;
    printf("Enter starting number and limit: ");
    scanf("%d %d", &num, &limit);
    while(num <= limit) {
        printf("%d ", num);
        if(num % 7 == 0)
            break;
        num *= 2;
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i;
    for(i = 1; i <= 200; i++) {
        if(i % 2 == 0 && i % 5 != 0)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i, count = 0;
    for(i = 1; i <= 50; i++) {
        if(i % 2 == 0 && i % 3 == 0) {
            printf("%d ", i);
            count++;
        }
    }
    printf("\\nCount: %d", count);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i = 1;
    while(1) {
        printf("%d ", i);
        if(i > 40 && i % 7 == 0)
            break;
        i++;
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num = 2, count = 0;
    while(num <= 1000) {
        printf("%d ", num);
        num *= 2;
        count++;
    }
    printf("\\nTimes multiplied: %d", count);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i;
    for(i = 1; i <= 50; i++) {
        if(i % 10 == 7)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int hours, fee;
    printf("Enter hours: ");
    scanf("%d", &hours);
    if(hours <= 2)
        fee = 0;
    else
        fee = (hours - 2) * 20;
    if(fee > 200)
        fee = 200;
    printf("Fee: %d pesos", fee);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i;
    for(i = 1; i <= 120; i++) {
        if(i % 4 == 0 && i <= 100)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    while(1) {
        num -= 7;
        printf("%d ", num);
        if(num < 0 || num % 5 == 0)
            break;
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i, first, last, temp;
    for(i = 1; i <= 80; i++) {
        last = i % 10;
        temp = i;
        while(temp >= 10)
            temp /= 10;
        first = temp;
        if(first == last)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    while(1) {
        num += 3;
        printf("%d ", num);
        if(num % 4 == 0 && num % 6 == 0)
            break;
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i, n, sum;
    for(i = 1; i <= 100; i++) {
        n = i;
        sum = 0;
        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }
        if(sum > 10)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int a, b, i, temp, count = 0;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    if(a > b) {
        temp = a; a = b; b = temp;
    }
    for(i = a; i <= b; i++) {
        if(i % 9 == 0) {
            count++;
            continue;
        }
        printf("%d ", i);
    }
    printf("\\nSkipped: %d", count);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i;
    for(i = 1; i <= 60; i++) {
        if(i % 3 == 0 && i % 2 == 0)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    while(num > 1) {
        printf("%d ", num);
        num /= 2;
    }
    printf("%d", num);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i, first, last, temp;
    for(i = 1; i <= 90; i++) {
        last = i % 10;
        temp = i;
        while(temp >= 10)
            temp /= 10;
        first = temp;
        if(first > last)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    while(1) {
        num -= 4;
        printf("%d ", num);
        if(num < 0 || num % 6 == 0)
            break;
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i;
    for(i = 1; i <= 100; i++) {
        if(i % 5 == 0 && i % 3 != 0)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num, target, count = 0;
    printf("Starting number: ");
    scanf("%d", &num);
    printf("Target: ");
    scanf("%d", &target);
    while(num < target) {
        num += 6;
        printf("%d ", num);
        count++;
    }
    printf("\\nAdditions: %d", count);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i, n, sum;
    for(i = 1; i <= 70; i++) {
        n = i;
        sum = 0;
        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }
        if(sum % 2 == 0)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int a, b, i, temp, count = 0;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    if(a > b) {
        temp = a; a = b; b = temp;
    }
    for(i = a; i <= b; i++) {
        if(i >= 10 && i <= 99 && i / 10 == i % 10)
            continue;
        printf("%d ", i);
        count++;
    }
    printf("\\nPrinted: %d", count);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num, count = 0;
    printf("Enter starting number: ");
    scanf("%d", &num);
    while(num <= 2000) {
        printf("%d ", num);
        num *= 3;
        count++;
    }
    printf("\\nMultiplications: %d", count);
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i;
    for(i = 1; i <= 100; i++) {
        if(i % 6 == 0 && i <= 80)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    while(1) {
        num += 5;
        printf("%d ", num);
        if(num % 3 == 0 && num % 4 == 0)
            break;
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int i, first, last, temp;
    for(i = 1; i <= 60; i++) {
        last = i % 10;
        temp = i;
        while(temp >= 10)
            temp /= 10;
        first = temp;
        if(last > first)
            continue;
        printf("%d ", i);
    }
    return 0;
}`,
`#include <stdio.h>
int main() {
    int a, b, i, temp, count = 0;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    if(a > b) {
        temp = a; a = b; b = temp;
    }
    for(i = a; i <= b; i++) {
        if(i % 4 == 0)
            continue;
        printf("%d ", i);
        count++;
    }
    printf("\\nPrinted: %d", count);
    return 0;
}`
];

let current = 0;
let answers = Array(30).fill("");
let marked = Array(30).fill(false);
let revealed = Array(30).fill(false);

const $ = id => document.getElementById(id);
const completed = () => answers.filter(a => a.trim()).length;
const score = () => marked.filter(Boolean).length;

function saveCurrent() {
  answers[current] = $("codeAnswer").value;
}

function render() {
  const q = questions[current];
  $("questionNumber").textContent = `QUESTION ${current + 1} OF 30`;
  $("questionTitle").textContent = q[0];
  $("questionPrompt").textContent = q[1];
  $("questionHint").textContent = "Hint: " + q[2];
  $("codeAnswer").value = answers[current];
  $("correctCheckbox").checked = marked[current];
  $("questionStatus").textContent = marked[current] ? "Marked correct" : (answers[current].trim() ? "Code entered" : "Not answered");
  $("previousButton").disabled = current === 0;
  $("nextButton").disabled = current === 29;
  $("solutionBox").classList.toggle("hidden", !revealed[current]);
  $("solutionCode").textContent = solutions[current];
  $("solutionButton").textContent = revealed[current] ? "Hide sample solution" : "Show sample solution";
  $("completedCount").textContent = `${completed()} / 30`;
  $("scoreCount").textContent = `${score()} / 30`;
  $("progressBar").style.width = `${completed() / 30 * 100}%`;
  $("progressLabel").textContent = `${Math.round(completed() / 30 * 100)}% completed`;

  $("questionNav").innerHTML = "";
  questions.forEach((_, index) => {
    const button = document.createElement("button");
    button.className = "question-dot" + (answers[index].trim() ? " done" : "") + (index === current ? " current" : "");
    button.textContent = index + 1;
    button.title = `Go to question ${index + 1}`;
    button.addEventListener("click", () => {
      saveCurrent();
      current = index;
      render();
    });
    $("questionNav").appendChild(button);
  });
}

$("codeAnswer").addEventListener("input", () => {
  saveCurrent();
  $("questionStatus").textContent = marked[current] ? "Marked correct" : (answers[current].trim() ? "Code entered" : "Not answered");
  $("completedCount").textContent = `${completed()} / 30`;
  $("progressBar").style.width = `${completed() / 30 * 100}%`;
  $("progressLabel").textContent = `${Math.round(completed() / 30 * 100)}% completed`;
  document.querySelectorAll(".question-dot")[current]?.classList.toggle("done", !!answers[current].trim());
});

$("correctCheckbox").addEventListener("change", () => {
  marked[current] = $("correctCheckbox").checked;
  $("scoreCount").textContent = `${score()} / 30`;
  $("questionStatus").textContent = marked[current] ? "Marked correct" : (answers[current].trim() ? "Code entered" : "Not answered");
});

$("clearButton").addEventListener("click", () => {
  answers[current] = "";
  $("codeAnswer").value = "";
  render();
});

$("solutionButton").addEventListener("click", () => {
  revealed[current] = !revealed[current];
  render();
});

$("previousButton").addEventListener("click", () => {
  saveCurrent();
  if (current > 0) current--;
  render();
});

$("nextButton").addEventListener("click", () => {
  saveCurrent();
  if (current < 29) current++;
  render();
});

$("finishButton").addEventListener("click", () => {
  saveCurrent();
  const percentage = Math.round(score() / 30 * 100);
  $("finalScore").textContent = `${score()} / 30`;
  $("percentage").textContent = `${percentage}%`;
  $("correctTotal").textContent = score();
  $("incorrectTotal").textContent = 30 - score();
  $("writtenTotal").textContent = completed();

  let message = "Keep practicing. You can improve!";
  if (percentage >= 90) message = "Excellent work!";
  else if (percentage >= 75) message = "Good job! Keep it up.";
  else if (percentage >= 60) message = "Nice effort. Review the questions you missed.";
  $("resultMessage").textContent = message;

  $("results").classList.remove("hidden");
  $("results").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("reviewButton").addEventListener("click", () => {
  $("results").classList.add("hidden");
  current = 0;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$("restartButton").addEventListener("click", () => {
  if (!confirm("Start over? This will erase all your answers and scores.")) return;
  current = 0;
  answers = Array(30).fill("");
  marked = Array(30).fill(false);
  revealed = Array(30).fill(false);
  $("results").classList.add("hidden");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
