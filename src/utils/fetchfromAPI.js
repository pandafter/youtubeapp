import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '10b0893788mshe0fb508da63c64dp13474bjsn2c96f1bb4e32',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchfromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  }