import * as actionTypes from '../constants/actionTypes';

function toggleDetails(e) {
  return function (dispatch) {
    if(e && e.target){
      let cls = e.target.parentElement.className;
      if(cls.indexOf("full-text") == -1){
        e.target.parentElement.className += " full-text";
      }else{
        e.target.parentElement.className = cls.replace(" full-text","");
      }
    }
  }
}

export {
  toggleDetails
};
