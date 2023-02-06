const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export async function sendMessage(phone, message) {
  client.messages
    .create({
      body: message,
      from: "+18334810102 ",
      to: phone,
    })
    .then((message) => {
      console.log(message.sid);
      return true;
    })
    .catch((error) => {
      // You can implement your fallback code here
      console.log(error);
      return false;
    });
}
