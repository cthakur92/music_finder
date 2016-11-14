function AppUtil(){
  var util = {};
  util.elipsize = function(string, length = 500){
    string = string ? string: "";
    if(string.length > length){
      return string.substring(0,(length-3))+"..."
    }else{
      return string;
    }
  }
  util.getLocation = function(item){
    let str = "";
    if(item.city || item.country){
        str += item.city ? item.city: "";
        str += (item.city && item.country)?" / ":"";
        str += item.country ? item.country: "";
        return "("+str+")";
    }
    return str;
  }
  util.getDuration = function(time_in_ms){
    let t = parseInt(time_in_ms/1000);
    let s = parseInt(t%60);
    let m = (t-s)/60;
    return m+":"+s;
  }
  return util;
}
export default AppUtil;
