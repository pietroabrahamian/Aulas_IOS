// 1)
let num = 0
while (num < 51) {
    console.log(`Valor = ${num}`);
    num++
}

// 2)
let num2 = 10,
text = '';
do {
text += `O número é ${num2}\n`;
num2--;
} while (num2 >= 0);
console.log(text);

// 3)
for (let num3 = 0; num3 < 101; num3++) {
    if (num3 % 2 == 0) {
        console.log(num3)
    };

}