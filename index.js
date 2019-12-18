const chalk = require("chalk");
const padStart = require("string.prototype.padstart");

const rnd = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const c = () => {
  const r = rnd(20) + 1;

  if (r < 16) {
    return rnd(2) === 1 ? ">" : "<";
  }

  if (r < 17) {
    return "*";
  }

  if (r < 18) {
    return "0";
  }

  if (r < 19) {
    return "@";
  }

  if (r < 20) {
    return "9";
  }

  return "o";
};

const colors = {
  "\\": chalk.yellowBright("\\"),
  "|": chalk.yellowBright("|"),
  "/": chalk.yellowBright("/"),
  "-": chalk.yellowBright("-"),
  "*": chalk.yellowBright("*"),
  ">": chalk.green(">"),
  "<": chalk.green("<"),
  "0": chalk.blueBright("0"),
  "@": chalk.redBright("@"),
  "9": chalk.white("9"),
  ' ': ' ',
  o: chalk.cyan("o")
};

const w = x => {
  return colors[x];
};

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const log = async (x) => {
  await sleep(200);
  console.log(x);
}

const inputWidth = 32;
const inputHeight = 16;

const treeTop = [" | ", "\\|/", "-*-", ">o<"];
const treeBottom = ['|||||','|||||','|||||','|||||'];

const printTree = async () => {
  const half = inputWidth / 2;
  
  while (treeTop.length) {
    const i = [...treeTop.shift()].map(x => w(x)).join("");
    let prt = padStart(i, half + i.length - 1, " ");

    await log(prt);
  }

  for (var i = 2; i <= inputHeight; i++) {
    let prnt = "";
      for (var j = 0; j <= inputWidth; j++) {
        prnt += j >= half - i && j <= half + i ? w(c()) : " ";
      }
    
    await log(prnt);
  }

  while (treeBottom.length) {
    const i = [...treeBottom.shift()].map(x => w(x)).join("");
    let prt = padStart(i, half + i.length - 2, " ");

    await log(prt);
  }
};

printTree();
