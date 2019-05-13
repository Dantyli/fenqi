import {Toast} from 'mint-ui' 
export default function toast(msg,duration){
      Toast({
          message:msg,
          duration:duration||1500
      })
}