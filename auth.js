const crypto = require('crypto')
    , shasum = crypto.createHash('sha256') 

module.exports = class Authen{
    sign(data,key,public){
        let _data ={
            data:data,
            key:key
        }
        let res = {
            data:data,
            public:public,
            signature:crypto.createHash('sha1').update(JSON.stringify(_data)).digest('hex')
        }
        return res
    }
    verify(data,signature,private){
        let _data ={
            data:data,
            key:private
        }
        if(signature == crypto.createHash('sha1').update(JSON.stringify(_data)).digest('hex')){
            return true
        }else{
            return false
        }

    }
}
