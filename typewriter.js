
// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//     // console.log(sentence);
//   }, 1000);
// }

// let sentence = "hello there from lighthouse labs";
// let startTime = 0;
// let delay = 50;

// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, startTime += delay);
// }
// setTimeout(() => {
//   process.stdout.write("\n");
// }, startTime);

const word = "hello there from lighthouse labs";
let delay = 2000;

for (const char of word) {
  setTimeout(() => process.stdout.write(char),delay);
  if ((delay - 2000) / 50 >= word.length - 1) {
    setTimeout(() => console.log(), delay);
  }
  delay += 50;

}