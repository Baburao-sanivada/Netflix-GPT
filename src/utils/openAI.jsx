import OpenAI from "openai";
import { Open_API_Key } from "./constants";

const openai = new OpenAI({
  apiKey: Open_API_Key, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;
