import { appBaseUrlRest } from "./app";

export const fetchApi = async (endpoint, options) => {
    const url = `${appBaseUrlRest}${endpoint}`;
    
    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      // Handle error
      console.error("API request failed:", error.message);
      throw error;
    }
  };