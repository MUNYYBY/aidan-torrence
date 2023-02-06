import twilio from "twilio";
import { sendMessage } from "@/twilio/client-requests";

export default function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ message: "Method not allowed!" });
  }
  const { phone, message } = req.body;
  console.log(req.body);
  console.log(phone, message);

  const result = sendMessage(phone, message);
  if (result) {
    res.status(200).json({ message: "Message sent successfully!" });
  } else {
    res.status(403).json({ message: "Message not sent successfully!" });
  }
}
