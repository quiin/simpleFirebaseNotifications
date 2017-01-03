# simpleFirebaseNotifications
A simple Node.js script to send notifications to an iOS or Android device using Firebase Cloud Messaging.
This is just an example and the following variables MUST be changed to your custom values in order for this to work:
- *client1* -> this is the firebase token retrived by the device. Check https://goo.gl/MnoHLu for *Android* and https://goo.gl/IkFPsC & https://goo.gl/AVzi5g for *iOS*
- *API_KEY -> can be found in the firebase console, click in the 3 vertical dots in your proyect and then under the tab _cloud messaging_
- *serviceAccount* -> this is the .json file you download form firebase
- *databaseURL* -> can be found in the firebase console under database

=How to run
npm install -s
node notification.js

if the notification was sent, _done!_ will be printed in the console, the error will be printed otherwise.

For further information about Firebase Cloud Messaging in the server-side and how to build more complex notifications, please visit
https://firebase.google.com/docs/cloud-messaging/downstream
