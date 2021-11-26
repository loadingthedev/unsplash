import axios from "axios"


export const images = async()=>{
    const {data} = await axios('https://api.unsplash.com/photos',{
        headers: {
            Authorization: 'Client-ID Og2f-A3xu2YnBfpvMxlqOcTueNsQfFRYtwSLZ_J4_gY'
          }
    })

    return data;
}
export const imagesBySearchTerm = async(searchTerm)=>{
    const {data} = await axios(`https://api.unsplash.com/search/photos?query=${searchTerm}`,{
        headers: {
            Authorization: 'Client-ID Og2f-A3xu2YnBfpvMxlqOcTueNsQfFRYtwSLZ_J4_gY'
          }
    })

    return data ;
}