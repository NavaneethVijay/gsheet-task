## Gsheet tasks

Add new rows to google sheets, used to make task update simpler and available in the terminal



## Usage

#### Clone the repository anywhere

`git clone https://github.com/NavaneethVijay/gsheet-task.git`



#### Install the packages

`npm install`



#### Configure authentication for Google Sheets following the link

https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication

Once the service account is created, provide google sheets access to the email.

This email user will be used to update the tasks on behalf of your accont.



#### Add new task

`node index.js --task="today,run twice a day,10,done"`



## Creating a custom alias to access the scirpt

`nano .bashrc`

#### Add the following content

`gtask() {`
   `node /usr/local/var/www/gsheet-task/index.js --task="today,$1,$2,$3"`
`}`

*Change this path to location where the repository is installed.*

`/usr/local/var/www/gsheet-task/index.js`



#### Access the script to add task anywhere from terminal.

`gtask "trello updates on git",1,done`
