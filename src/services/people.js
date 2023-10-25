import axiosInstance from "../config/instance";

export const getPeople = async (page) => {
  try {
    const result = await axiosInstance.get(`person/popular?page=${page}`)
    console.log('people_person ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getpeople service -> ', error)
  }
}