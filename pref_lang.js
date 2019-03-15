const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const admin = require('firebase-admin');
const functions = require('firebase-functions');

var serviceAccount = require('../../translator-bot-e8a01-910eaec0025e.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://translator-bot-e8a01.firebaseio.com'
});

var db = admin.firestore();


/**
* /pref_lang
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
module.exports = async (user, channel, text = '', command = {}, botToken = null) => {
  var docRef = db.collection('users').doc(user);
  var setUserResult = await docRef.set({
    user: user,
    lang: text
  });
  
    return setUserResult;
};
