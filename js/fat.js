const height = 1.68;
const weight = 66;

const BMI = weight / (height * height);
console.log(BMI);

if (BMI < 18.5) {
    console.log("太瘦了");
} else if (BMI < 23.9 && BMI > 18.5) {
    console.log("正常");
} else if ( BMI < 27 && BMI > 24) {
    console.log("有点胖了");
} else if ( BMI < 32 && BMI > 28) {
    console.log("真的胖了");
} else if (BMI > 32) {
    console.log("非常胖了");
}