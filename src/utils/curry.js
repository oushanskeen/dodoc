const sum = a => b => c =>  a+b+c;
console.log("2+3=",sum(2)(3)(4));

const sumSup = a => ((b=0) => b+a);
console.log("2+3=",sumSup(2)());
console.log("2+3=",sumSup(2)(4));

const text = a => (b="_") => `let ${a} and ${b} is ok`;
console.log("some text : ", text("cat")());
console.log("some text : ", text("cat")("dog"));
