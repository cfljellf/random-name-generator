const textLength = 6;
const loop = 10;

console.log("<<<<<=================================");
[...Array(loop)].forEach(() => generateRandomName(textLength));
console.log("=================================>>>>>");

function generateRandomName(length) {
  const randomName = randomAlphabets()
    .filter((_, i) => i < length)
    .join("");
  console.log(randomName);
}

function randomAlphabets() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomAlphabets = alphabets
    .map((c) => ({ sort: Math.random(), value: c }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
  return randomAlphabets;
}
