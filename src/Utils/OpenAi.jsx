import OpenAI from 'openai';
import {OpenAI_key} from "../Utils/Constants"

const openai = new OpenAI({
  apiKey:OpenAI_key, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser:true,
});

export default openai
