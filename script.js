let finalResult = "";


function calculateScore() {

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');


    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions.");
        return;
    }


    let patient = document.getElementById("patientName").value;


    // Question 1 = forward scored
    let score1 = Number(q1.value);


    // Questions 2 and 3 = reverse scored
    let score2 = 6 - Number(q2.value);
    let score3 = 6 - Number(q3.value);


    // Raw score
    let rawScore = score1 + score2 + score3;


    // Raw score conversion table
    let conversionTable = {
        3: 0,
        4: 0,
        5: 9,
        6: 14,
        7: 18,
        8: 21,
        9: 23,
        10: 25,
        11: 27,
        12: 29,
        13: 31,
        14: 32,
        15: 34
    };


    let convertedScore = conversionTable[rawScore];


    finalResult =
    "CIQOL-10 Demo Results\n\n" +
    "Patient: " + patient + "\n" +
    "Date: " + new Date().toLocaleDateString() + "\n\n" +
    "Question Scores:\n" +
    "Question 1: " + score1 + "\n" +
    "Question 2: " + score2 + "\n" +
    "Question 3: " + score3 + "\n\n" +
    "Raw Score: " + rawScore + "\n" +
    "Converted Score: " + convertedScore;


    document.getElementById("result").innerHTML =
    "Raw Score: " + rawScore +
    "<br>Converted Score: " + convertedScore;

}



function downloadResults() {

    if (finalResult === "") {
        alert("Please calculate the score first.");
        return;
    }


    let file = new Blob([finalResult], {
        type: "text/plain"
    });


    let link = document.createElement("a");

    link.href = URL.createObjectURL(file);

    link.download = "CIQOL_Result.txt";

    link.click();

}
