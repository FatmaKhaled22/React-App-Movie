import axiosInstance from "../config/instance";

export const getTrendTv = async () => {
  try {
    const result = await axiosInstance.get(`trending/tv/day`)
    console.log('trend_tv ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getTrendTv service -> ', error)
  }
}

export const getTrendMovie = async () => {
  try {
    const result = await axiosInstance.get(`trending/movie/day`)
    console.log('trend_movie ---->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getTrendMovie service -> ', error)
  }
}