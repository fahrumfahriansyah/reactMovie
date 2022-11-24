import axios from "axios"

export const getListMovie = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5fab4789b1680ecd3fadc19a715920dd`)
    return movie.data.results
}
export const searchMovie = async (q) => {
    const Search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=5fab4789b1680ecd3fadc19a715920dd`)
    const dat = q
    if (dat !== undefined) {
        return Search.data
    }
}

