// 1) if() {}
// 2) else if() {}
// 3) else {}
// >, <, <=, >=, ==, !=

// if(8 < 5) {
//     document.write("Yes");
// } else {
//     document.write("No")
// }


// // 1 2 -8 // > 0, YES
// if (1 > 0) {
//     console.log("YES")
// }
// if (2 > 0) {
//     console.log("YES")
// }
// if (-8 > 0) {
//     console.log("YES")
// }


// // Логические операторы: || - or, && - and
// if (3 < 5 && 8 > 5) {
//     console.log("yes")
// }
// if (4 > 6 || 7 < 8) {
//     console.log("Yes")
// } else {
//     console.log("NO")
// }


// // Тернарный оператор () ? console.log("YES") : console.log("No")
// (3 > 4) ? console.log("YES") : console.log("NOO")



// Question 1
let user_input = parseInt(prompt("Enter any number: "));
if (user_input == 0) {
    console.log("This is zero");
} else if (user_input % 2 == 0) {
    console.log("This is an even number");
} else {
    console.log("This is an odd number");
}


// // Question 2
if (user_input > 0) {
    console.log("This is a positive number")
} else if (user_input < 0) {
    console.log("This is a negative number")
} else {
    console.log("This is zero")
}


// // Question 3
let number1 = parseInt(prompt("Enter first number: "));
let number2 = parseInt(prompt("Enter second number: "));
let number3 = parseInt(prompt("Enter third number: "));
if (number1 > number2 && number1 > number3) {
    console.log(number1)
} else if (number2 > number1 && number2 > number3) {
    console.log(number2)
} else if (number3 > number1 && number3 > number2) {
    console.log(number3)
} else {
    console.log("There is no bigger number")
}


// Question 4
let temperature = parseInt(prompt("Enter temperature: "));
if (temperature < 0) {
    console.log("Морозная погода")
} else if (temperature > 0 && temperature < 9) {
    console.log("Очень холодная погода")
} else if (temperature > 10 && temperature < 20) {
    console.log("Холодная погода")
} else if (temperature > 20 && temperature < 30) {
    console.log("Нормальная температура")
} else if (temperature > 30 && temperature < 40) {
    console.log("Жарко")
} else if (temperature >= 40) {
    console.log("Очень жарко")
} else {
    console.log("Not a valid number")
}


// Question 5
let first_leg = parseInt(prompt("Enter first leg's value: "));
let second_leg = parseInt(prompt("Enter second leg's value: "));
let hypotenuse = parseInt(prompt("Enter hypotenuse's value: "));
if (first_leg + second_leg + hypotenuse == 180) {
    console.log("Треугольник действителен")
} else {
    console.log("Треугольник не действителен")
}


// Question 6
let letter = prompt("Enter any letter: ").toLowerCase()
if (letter == "a" || letter == "e" || letter == "i"  || letter == "o" || letter == "u" || letter == "y") {
    console.log("Гласная буква")
} else {
    console.log("Согласная буква")
}


// Question 7
let first_whole_number = parseInt(prompt("Enter first whole number: "));
let second_whole_number = parseInt(prompt("Enter second whole number: "));
if (first_whole_number % second_whole_number == 0) {
    console.log("Делится")
} else if (first_whole_number & second_whole_number != 0) {
    console.log("Не делится, остаток " + (first_whole_number % second_whole_number))
} else {
    console.log("Что-то пошло не так")
}


// Question 8
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
if (num1 > 0 && num2 > 0) {
    console.log(num1 + num2)
} else {
    console.log("Условие не выполняется")
}


// Question 9
let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
let c = parseInt(prompt("Enter third number: "));
if (a % 5 == 0) {
    console.log(a);
} 
if (b % 5 == 0) {
    console.log(b);
} 
if (c % 5 == 0) {
    console.log(c);
} 


// Question 10
let x = parseInt(prompt("Enter a number: "))
if (x > 0) {
    console.log("1")
} else if (x < 0) {
    console.log("-1")
} else if (x == 0) {
    console.log("0")
}


// Question 11
let a1 = parseInt(prompt("Enter first number: "));
let a2 = parseInt(prompt("Enter second number: "));
let a3 = parseInt(prompt("Enter third number: "));
let a4 = parseInt(prompt("Enter fourth number: "));
let count = 0;
if (a1 > 0) {
    count += 1
} 
if (a2 > 0) {
    count += 1
}
if (a3 > 0) {
    count += 1
}
if (a4 > 0) {
    count += 1
}
console.log("Number of positive numbers " + count)


// Switch Case 1
let finger = parseInt(prompt("Enter number of finger"))
switch(finger) {
    case 1:
        console.log("Большой палец")
        break;
    case 2:
        console.log("Указательный палец")
        break;
    case 3:
        console.log("Средний палец")
        break;
    case 4:
        console.log("Безымянный палец")
        break;
    case 5:
        console.log("Мизинец")
        break;
    default:
        console.log("Сколько у тебя пальцев???")
} 


// Switch Case 2
let k = parseInt(prompt("Enter a number: "))
switch(k) {
    case 1:
        console.log("Плохо")
        break
    case 2:
        console.log("Неудовлетворительно")
        break
    case 3:
        console.log("Удовлетворительно")
        break
    case 4:
        console.log("Хорошо")
        break
    case 5:
        console.log("Отлично")
        break
}


// Switch Case 3
let numberr = parseInt(prompt("Enter number (1-5): "))
switch(numberr) {
    case 1:
        let decimeter = parseInt(prompt("Enter decimeter: "))
        console.log(decimeter / 10)
        break
    case 2:
        let kilometer = parseInt(prompt("Enter kilometer: "))
        console.log(kilometer * 1000)
        break
    case 3:
        let meter = parseInt(prompt("Enter meter: "))
        console.log(meter)
        break
    case 4:
        let millimeter = parseInt(prompt("Enter millimeter: "))
        console.log(millimeter / 1000)
        break
    case 5:
        let centimeter = parseInt(prompt("Enter centimeter: "))
        console.log(centimeter / 100)
        break
}


