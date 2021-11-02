var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];
programmingLanguages.forEach(function (element, index) {
  console.log(`${index + 1}. ${element.toLocaleUpperCase()}`);
})

for (var languages of programmingLanguages) {
  console.log(`I want to learn ${languages}.`)

};

const updatedLanguages = programmingLanguages.filter(function (languages) {
  return languages.includes("y");
});

console.log(updatedLanguages)