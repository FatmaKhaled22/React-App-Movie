import axiosInstance from "../config/instance";

export const getMoviesPop = async () => {
  try {
    const result = await axiosInstance.get(`/movie/popular`)
    console.log('pop ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getMovies service -> ', error)
  }
}
export const getMoviesUpcom = async () => {
  try {
    const result = await axiosInstance.get(`/movie/upcoming`)
    console.log('upcom ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getMovies service -> ', error)
  }
}
export const getMoviesTop = async () => {
  try {
    const result = await axiosInstance.get(`/movie/top_rated`)
    console.log('top ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getMovies service -> ', error)
  }
}
export const getMoviesNow = async () => {
  try {
    const result = await axiosInstance.get(`/movie/now_playing`)
    console.log('now ----->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getMovies service -> ', error)
  }
}