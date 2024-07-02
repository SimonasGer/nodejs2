module.exports = (numbers) => {
    const newNumbers = numbers.split(" ");
    if (isNaN(newNumbers[0]) || isNaN(newNumbers[2])){
        return "Ne skaicius"
    }
    if (newNumbers[1] === "plus"){
        return Number(newNumbers[0]) + Number(newNumbers[2])
    }
    else if (newNumbers[1] === "-"){
        return Number(newNumbers[0]) - Number(newNumbers[2])
    }
    else if (newNumbers[1] === "*"){
        return Number(newNumbers[0]) * Number(newNumbers[2])
    }
    else if (newNumbers[1] === "/"){
        return Number(newNumbers[0]) / Number(newNumbers[2])
    }
    else {
        return "Netinkamas matematinis zenklas"
    }

}