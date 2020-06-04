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