import type { IQuote } from "@/models/IQuote";
import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get<IQuote>("https://api.kanye.rest/");
    return response.data.quote;
  } catch (error) {
    console.error("Error fethcing qutoe:", error);
    throw error;
  }
};
