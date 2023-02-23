## Gsheet tasks

Add new rows to google sheets, used to make task update simpler and available in the terminal



## Usage

#### Clone the repository anywhere

`git clone https://github.com/NavaneethVijay/gsheet-task.git`



#### Install the packages

`npm install`



#### Configure authentication for Google Sheets following the link

https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication

1. Once the service account is created, provide google sheets access to the email.
2. This email user will be used to update the tasks on behalf of your accont.
3. Download the credentials.json file and add in the root directory

Sample credentials.json

`{`

​    `"type": "service_account",`

​    `"project_id": "navaneeth-377008",`

​    `"private_key_id": "c42ee6ec3d7d1261537b84e12a7bfbaf1d186b589asas",`

​    `"private_key": "-----BEGIN PRIVATE KEY-----",`

​    `"client_email": "serviceaccountemail@gmail.com",`

​    `"client_id": "10642287305244541962112313",`

​    `"auth_uri": "https://accounts.google.com/o/oauth2/auth",`

​    `"token_uri": "https://oauth2.googleapis.com/token",`

​    `"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",`

​    `"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/navaneeth%40navaneeth-377008.iam.gserviceaccount.com",`

​    `"doc_id" : "1Ozc7UyqPux2a0dvLDLKaEODKtLoasasax1w2RW0YxsERY6lg", `

​    `"sheet_id": 1932122546994`

  `}`

**doc_id**  is the ID of your Google Sheet

**sheet_id** is the specific page ID in the Google Sheet



Sample Task sheet columns based on which the script was created

| Date | Task | Time spent | Status |



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
