const { GoogleSpreadsheet } = require("google-spreadsheet");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

class SheetTaskUpdate {
  constructor(GoogleSpreadsheet,argv) {
    this.creds = require("./credentials.json");
    this.doc = new GoogleSpreadsheet(this.creds.doc_id);
    this.taskString = argv.task
    this.process();
  }

  /**
   *
   * @returns this
   */
  async process() {
    await this.doc.useServiceAccountAuth({
      client_email: this.creds.client_email,
      private_key: this.creds.private_key,
    });
    await this.doc.loadInfo();
    console.log(`Processing => ${this.doc.title}`);
    // const readline = require("readline").createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    // });
    let taskDetails = "";
    // readline.question("", async (taskInput) => {
      taskDetails = this.taskString.split(",");
      if (taskDetails[0].toLowerCase() == "today") {
        taskDetails[0] = this.processDate();
      }
      await this.addTask(taskDetails);
    //   readline.close();
    // });
  }

  /**
   *  Task should column value array
   * @param {Array} task
   */
  async addTask(task) {
    const taskSheet = this.doc.sheetsById[this.creds.sheet_id];
    taskSheet.addRow(task).then(() => {
      console.log("Added new task");
    });
  }

  /**
   *
   * @param {*} date
   * @returns
   */
  processDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // Change the date format according to Sheets
    let currentDate = `${month}-${day}-${year}`;
    return currentDate;
  }
}
module.exports = new SheetTaskUpdate(GoogleSpreadsheet,argv);
