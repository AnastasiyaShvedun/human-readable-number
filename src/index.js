module.exports = function toReadable(number) {

    let predefinedNumber = {

        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",

        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",

    };
    let predefinedDozens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
    let Num = String(number);
    let NumberEnd;
    if (Num.slice(1) > 20)
        NumberEnd = predefinedDozens[+(Num[1] + "0")] + " " + predefinedNumber[+Num[2]]
    else if (Num.slice(1) < 20)
        NumberEnd = predefinedNumber[+Num.slice(1)]

    if (number === 0)
        return "zero";
    if (predefinedNumber[Num])
        return predefinedNumber[Num];
    if (predefinedDozens[Num])
        return predefinedDozens[Num];

    else if (Num.length === 2)
        return predefinedDozens[+(Num[0] + "0")] + " " + predefinedNumber[+Num[1]];
    else if (Num.slice(1) === "00")
        return predefinedNumber[+Num[0]] + " hundred";
    else if (Num.slice(2) === "0")
        return predefinedNumber[+Num[0]] + " hundred" + " " + predefinedDozens[+(Num[1] + "0")];
    else return predefinedNumber[+Num[0]] + " hundred" + " " + NumberEnd;


}

