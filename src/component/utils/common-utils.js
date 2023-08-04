


const checkValidJson=(text)=>{
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
}else{
    return false;
}
}



export const checkParams = ( formData, paramData, headerData, jsonText,setErrorMsg ) => {
    if (!formData.url) {
        setErrorMsg('URL is required');
        return false
    }
  if(!checkValidJson(jsonText)){
    setErrorMsg("Invalid JSON");
    return false;
  }

  return true;

}

export const getHeaderAndParams=(objArr)=>{
    let obj={};
    objArr.forEach(data=>{
        if(data.hasOwnProperty('check') && data.check){
            obj={...obj , [data.key] :data.value}
        }
    })
  return obj;
}