import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

export function getToken(element) {
  const token = jwt.sing(element, privateKey);
  return token;
}
