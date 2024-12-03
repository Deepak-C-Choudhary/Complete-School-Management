
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const addSchool = async (schoolData) => {
  try {
    const response = await axios.post(`${API_URL}/addSchool`, schoolData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const listSchools = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${API_URL}/listSchools`, {
      params: { latitude, longitude },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
