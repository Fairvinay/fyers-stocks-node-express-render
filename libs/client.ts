import axios from "axios";

const API = axios.create({
    baseURL: 'https://www.alphavantage.co/query',
    timeout: 25000  // netlify times out in 30 secs 
})
const FYERSAPI = axios.create({
   //   baseURL: 'https://store-stocks.netlify.app/.netlify/functions/netlifystockfyersbridge/api'
  //baseURL: 'http://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api'
  baseURL: 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api'
})
//const FYERSAPILOGINURL = 'https://store-stocks.netlify.app/.netlify/functions/netlifystockfyersbridge/api/fyerscallback'
//const FYERSAPINSECSV = 'https://store-stocks.netlify.app';
//const FYERSAPILOGINURL = 'http://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyerscallback'
const FYERSAPILOGINURL = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyerscallback'
const FYERSAPITRADEBOOKURL = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyersgettradebook'
const FYERSAPIPOSITIONBOOKURL = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyersgetpositionbook'
const FYERSAPIHOLDINGSURL = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyersgetholdings'
const FYERSAPIORDERBOOKSURL = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyersgetorderbook'
const FYERSAPICANCELORDER = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyerscancelorder'
const FYERSAPIBUYORDER = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyersplacebuyorder'
const FYERSAPISELLORDER = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersbridge/api/fyersplacesellorder'

const FYERSAPITICKERURL = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersticker/api/fyersgetticker'
const FYERSAPITHREESECQUOTE = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersticker/api/fyersgetbsecequote'
const FYERSAPITICKERACCESTOKEN = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersticker/api/fyersaccesstoken'
const FYERSAPITICKERURLCLOSE = 'https://192.168.1.12:8888/.netlify/functions/netlifystockfyersticker/api/close'
const FYERSAPINSECSV = 'https://192.168.1.12:8888';

export { API , FYERSAPI ,FYERSAPILOGINURL , FYERSAPINSECSV , FYERSAPITRADEBOOKURL ,FYERSAPIHOLDINGSURL ,
  FYERSAPICANCELORDER,FYERSAPIBUYORDER,FYERSAPISELLORDER
  ,FYERSAPIORDERBOOKSURL ,FYERSAPITICKERURL , FYERSAPITICKERURLCLOSE ,FYERSAPITICKERACCESTOKEN,FYERSAPITHREESECQUOTE,FYERSAPIPOSITIONBOOKURL
};