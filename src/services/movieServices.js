import axiosInstance from "../config/instance";

export const getMovies = async () => {
  try {
    const result = await axiosInstance.get(`/3/movie/popular`)
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getMovies service -> ', error)
  }
}