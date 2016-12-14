
var firebase = require('firebase-admin');
var request = require('request');

var API_KEY = "AAAASCxEWPw:APA91bEecEob0wi9jtUkCfBeSzar5iDgocvwr30gwsuKU5rpbpAbPrTnMDp9Oj2ixrYXZQPTY8Dh_C-StNfbQXW91khWp53YVWw5ZNgmtH7ttn8G_1MgHq70mF0tpgMnmCglpSmkd5UrMXljDxXiTH6kL3eDvd9f7Q";

const serviceAccount = require('./serviceAccountKey.json')
const client1 = "dZ31QQEyQBs:APA91bEOF1vFAkCl3uVKtvDn4fQRUPmAzblG4VHdZm7LWIJPkr5wuJOYLni1acvaGy2xVmh7dJ8Hx89CI0ac_6xXENJ2_PfqRN1zfHU-jIKiC4tb1GnSMFSpaIhrLe-2XSGng6phJArc";

firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: "https://invitationtest-b765d.firebaseio.com/"
});

function sendNotification(deviceId, message, onSuccess){
	request({
		 url: 'https://fcm.googleapis.com/fcm/send',
		 method: 'POST',
		 headers: {
		 	'Content-Type': 'application/json',
		 	'Authorization': "key="+API_KEY
		 },
		 body: JSON.stringify({
		 	"notification": {
		 		"title": "Hi",
		 		"body": "Body"
		 	},
		 	"to": deviceId
		 })
	}, (error, response, body) =>{
		if(error) {console.log(error);}
		else if (response.statusCode >= 400){
			console.log("HTTP Error: " + response.statusCode + ' - ' + response.statusMessage);
		}else {onSuccess();}
	})
}

sendNotification(client1, "Prueba", ()=> {
	console.log('done!');
})