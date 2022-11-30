const year = prompt("What is your year of birth?");
let age = 2022 - parseInt(year);
if (!year) {
    alert("It's a pitty you didn't want to tell us your age!");
    age = "-";
}

const city = prompt("Which city do you live in?");
let cityAnswer;
if (!city) {
    alert("It's a pitty you didn't want to tell us where you are from!");
}

const sport = prompt("What is your favourite sport?");
let sportAnswer;
if (!sport) {
    alert("It's a pitty you didn't want to tell us where your favourite sport!");
    sportAnswer = "-";
}


switch (city) {
    case "Kyiv":
        cityAnswer = "You live in the capital of Ukraine!";
        break;
    case "Washington":
        cityAnswer = "You live in the capital of USA!";
        break;
    case "London":
        cityAnswer = "You live in the capital of Great Britain!";
        break;
    default:
        cityAnswer = "You live in the city of " + city + "!";
}

if (!city) {
    cityAnswer = "-";
}


if (sport === "basketball") {
    sportAnswer = "Nice! Do you want to be the next Michael Jordan?";
} else if (sport === "football") {
    sportAnswer = "Nice! Do you want to be the next Lionel Messi?";
} else if (sport === "golf") {
    sportAnswer = "Nice! Do you want to be the next Tiger Woods?";
} else {
    sportAnswer = sport;
}

const alertMsg = age + "\n" + 
cityAnswer + "\n" 
+ sportAnswer;
alert(alertMsg);