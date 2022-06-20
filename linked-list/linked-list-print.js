import chalk from "chalk";

class LinkedListPrint {
  constructor(options = { logging: false }) {
    this.logging = options.logging;
  }

  #generateListInfo({ method, index, targetNodeData }) {
    let output = chalk.green(`${method} `.padStart(8, " "));

    const dataWithColor = targetNodeData
      ? chalk.blue(targetNodeData)
      : chalk.gray(targetNodeData);

    switch (method) {
      case "GET":
      case "INITIAL":
      case "REVERSE":
        output += `${" ".repeat(12)}`;
        break;
      default:
        output += `${this.#generateNode(dataWithColor).padEnd(42, " ")}`;
    }

    output += chalk.green(" ⟩ ");

    switch (method) {
      case "INITIAL":
      case "REVERSE":
        output += `${" ".repeat(10)}`;
        break;
      default:
        output += this.#generateNthNodeData(index);
    }

    output += chalk.magenta(" ⟩ ");

    output += this.#generateLengthData({ method, targetNodeData });

    return output;
  }

  #generateResult({ method, targetNodeData }) {
    switch (method) {
      case "GET":
        return targetNodeData
          ? chalk.blue(`${targetNodeData}`)
          : chalk.gray(`${targetNodeData}`);
      default:
        let output = this.#generateNode(chalk.yellow("HEAD"));
        let currNode = this.head;
        while (currNode) {
          output += chalk.gray("－");
          output += this.#generateNode(chalk.blue(currNode.data));
          currNode = currNode.next;
        }
        output += chalk.gray("－");
        output += this.#generateNode(chalk.yellow("TAIL"));
        return output;
    }
  }

  #generateNode(data) {
    return `${chalk.gray("❰")}${data}${chalk.gray("❱")}`;
  }

  #generateLengthData({ method, targetNodeData }) {
    let output = chalk.cyan(`length ${this.length}`.padStart(9, " "));
    let stats = chalk.gray(" 0");
    switch (method) {
      case "POP":
      case "SHIFT":
      case "REMOVE":
        stats = targetNodeData ? chalk.red("-1") : chalk.gray(" 0");
        break;
      case "PUSH":
      case "UNSHIFT":
      case "INSERT":
        stats = chalk.green("+1");
        break;
      default:
        stats = chalk.gray(" 0");
    }
    output += `${chalk.gray("⟨")}${stats}${chalk.gray("⟩")} `;
    output += `${chalk.cyan("⟩")} `.padStart(12, " ");
    return output;
  }

  #generateNthNodeData(index) {
    let idxString = "th";
    switch (Math.abs(index % 10)) {
      case 1:
        idxString = "st";
        break;
      case 2:
        idxString = "nd";
        break;
      case 3:
        idxString = "rd";
        break;
      default:
        idxString = "th";
    }
    const nodeDataWithColor =
      index === null ? " " : `${index}${idxString} node`;
    let output = chalk.magenta(`${nodeDataWithColor}`.padStart(10, " "));
    return output;
  }

  print({ method, targetNodeData, index }) {
    let output = this.#generateListInfo({ method, index, targetNodeData });
    output += this.#generateResult({ method, targetNodeData });
    if (this.logging) console.log(output);
  }

  printInitial() {
    this.print({ method: "INITIAL" });
  }

  printPush(data) {
    this.print({
      method: "PUSH",
      index: this.length - 1,
      targetNodeData: data,
    });
  }

  printPop(data) {
    this.print({ method: "POP", index: this.length - 1, targetNodeData: data });
  }

  printShift(data) {
    this.print({ method: "SHIFT", index: 0, targetNodeData: data });
  }

  printUnshift(data) {
    this.print({ method: "UNSHIFT", index: 0, targetNodeData: data });
  }

  printGet(index, result) {
    this.print({ method: "GET", index, targetNodeData: result });
  }

  printSet(index, data) {
    this.print({ method: "SET", index, targetNodeData: data });
  }

  printInsert(index, data) {
    this.print({ method: "INSERT", index, targetNodeData: data });
  }

  printRemove(index, result) {
    this.print({ method: "REMOVE", index, targetNodeData: result });
  }

  printReverse() {
    this.print({ method: "REVERSE" });
  }
}

export { LinkedListPrint };
