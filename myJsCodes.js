function printBarev() {
    let input = document.getElementById("userInput").value;

    if (input === 'ArpiBakunts') {
        let result = "Barev, you entered the correct password!!! Now let me tell you about myself";
        result = result.fontcolor('white');
        result = result.fontsize(20);
        document.getElementById("message").innerHTML = result;
    } else {
        alert("Incorrect password. Byeeee!!!");
    }
    return input
}

function hideShow(element) {
    let show = document.getElementById(element);

    if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }
}

// function printBarev() {
//     let input = document.getElementById("userInput").value;
//
//     if (input != false) {
//         let result = "Barev " + input + " jan, let me tell about myself";
//         result = result.fontcolor('navy');
//         result = result.fontsize(20);
//         document.getElementById("message").innerHTML = result;
//     } else {
//         alert("Les try again");
//     }
//     return input
// }

function humanDogCalculator() {
    let age = prompt("Please enter your dog's age ", 5);

    if (age === null) {
        return;
    }

    age = parseInt(age);

    if (age < 0) {
        alert("Age cannot be negative number");
    } else if (age > 0 && age <= 1) {
        alert("Your dog's human age is around 15");
    } else if(age > 1 && age <= 20) {
        let finalAge = 0;

        for (let i = 0; i < age ; i ++) {
            finalAge += 5;
        }
        alert(`Your dog's human age is around ${finalAge + 13}`);
    } else {
        alert("Your dog is in heaven");
    }
}