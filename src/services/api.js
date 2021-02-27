import axios from 'axios'
import CryptoJS from 'crypto-js'

const hash = CryptoJS.MD5(
	1 + 
	process.env.REACT_APP_PRIVATE_API_KEY +
	process.env.REACT_APP_PUBLIC_API_KEY

).toString(CryptoJS.enc.Hex)

const api = axios.create({
  	baseURL: 'https://gateway.marvel.com/v1/public',
  	
  	params: {
    	"apikey": process.env.REACT_APP_PUBLIC_API_KEY,
    	"ts": 1,
    	"hash": hash,
      "limit": 60
    },
  	
    method: 'get',
    responseType: 'json',
});


export default api