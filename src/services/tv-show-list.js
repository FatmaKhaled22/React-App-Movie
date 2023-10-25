import axiosInstance from "../config/instance";

export const getTvToday = async () => {
  try {
    const result = await axiosInstance.get(`tv/airing_today`)
    console.log('tv_today ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getTvToday service -> ', error)
  }
}
export const getTvAir = async (page) => {
  try {
    const result = await axiosInstance.get(`tv/on_the_air?page=${page}`)
    console.log('tv_air ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getTvAir service -> ', error)
  }
}
export const getTvTop = async () => {
  try {
    const result = await axiosInstance.get(`/tv/top_rated`)
    console.log('tv_top ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in geTvTop service -> ', error)
  }
}
export const getTvPop = async () => {
  try {
    const result = await axiosInstance.get(`/tv/popular`)
    console.log('tv_pop ----->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getTvPop service -> ', error)
  }
}