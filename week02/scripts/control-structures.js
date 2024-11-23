function checkAge(age) {
    if (age < 13) {
        return "You're a child.";
    } else if (age >= 13 && age < 20) {
        return "You're a teenager.";
    } else {
        return "You're an adult.";
    }
}

function getDayMessage(day)
{
    switch (day.toLowerCase())
    {
        case "monday":
            return "start of the work week";
        case "friday":
            return "almost the weekend";
        case "saturday":
            return "hoje sabado";
        default:
            return "it's just another day";
    }
}

function sumNumbers(limit)
{
    let sum = 0;
    for (let i = 1; i <= limit; i++)
    {
        sum += i;
    }
}

function countdown(start)
{
    let result = "";
    while (start > 0)
    {
        result += `${start}....`;
        start --;
    }
    result += "blast off";
    return result;
}

function listFruits(fruits)
{
    let result = "here are teh fruits:\n";
    fruits.forEach((fruit,index) => {
        result += `${index + 1}.${fruit}\n`;
    });
    return result;
}

document.getElementById("runExample").addEventListener("click", ()=> {

    const output = document.getElementById("output");
    
    const ageMessage = checkAge(15);
    const dayMessage = getDayMessage("friday");
    const sumMessage = sumNumbers(10);
    const countdownMessage = countdown(5);
    const fruitsMessage = listFruits(["apple","banana","cherry"]);

    output.textContent = `
        Age message ${ageMessage}
        Day Message ${dayMessage}
        Sum Message ${sumMessage}
        countdown Messge ${countdownMessage}
        Fruit List:\n${fruitsMessage}
        `;
});
