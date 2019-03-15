// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');

// Creates a client
const translate = new Translate();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const text = 'The text for which to detect language, e.g. Hello, world!';

// Detects the language. "text" can be a string for detecting the language of
// a single piece of text, or an array of strings for detecting the languages
// of multiple texts.
let text = "detect=bonjour je m'appelle";
if (text.match(/detect=/i)) {
    var n = text.indexOf("=");
    string_to_scan = text.slice(n+1, text.length);
}

let detections = new Array();
translate.detect(text).then(detections => {
    detections = Array.isArray(detections) ? detections : [detections];
    var detected_lang = detections[0].language.toString();
    console.log(detected_lang);
})

