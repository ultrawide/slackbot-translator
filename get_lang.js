const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const admin = require('firebase-admin');
const functions = require('firebase-functions');
var serviceAccount = require('../../translator-bot-e8a01-910eaec0025e.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://translator-bot-e8a01.firebaseio.com'
});

var db = admin.firestore();
var langPref = '';
/**
* /get_lang
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/

module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  var snapshot = "";
  var userRef = db.collection('users').doc(user);
  var getDoc = userRef.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('no such document');
   }
    else {
      snapshot = doc.data();
      console.log('Document data:', doc.data());
    }
  });
  
  console.log("test");
  //console.log(langPref);
  //callback(null, langPref);
/*  docRef.on('value').function(snapshot){
    snap
  }
db.collection('users').doc(user).get()
  .then((snapshot) => {
    //snapshot.forEach((doc) => {
    langPref = doc.data().lang;
    //});
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
*/

callback(null, {
    text: '$(snapshot)',
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });

};