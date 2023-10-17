import axiosInstance from "../config/instance";

export const getPeople = async () => {
  try {
    const result = await axiosInstance.get(`person/popular`)
    console.log('people_person ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getpeople service -> ', error)
  }
}