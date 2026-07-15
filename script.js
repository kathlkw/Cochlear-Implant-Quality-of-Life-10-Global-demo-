function calculateScore() {

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions.");
        return;
    }

    // Convert answers to numbers
    let score1 = Number(q1.value);

    // Reverse scoring for questions 2 and 3
    let score2 = 6 - Number(q2.value);
    let score3 = 6 - Number(q3.value);

    // Raw score
    let rawScore = score1 + score2 + score3;


    // Conversion table
    let conversion = {
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


    let convertedScore = conversion[rawScore];


    document.getElementById("result").innerHTML =
        "Raw Score: " + rawScore +
        "<br>Converted Score: " + convertedScore;
}
