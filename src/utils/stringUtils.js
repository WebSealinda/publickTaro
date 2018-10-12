import { showToast } from './toastUtils';

export const checkEmpty = (content, toast) => {
  if(content !== null && content !== undefined && content.trim().length !== 0){
    return false;
  }else {
    if(toast !== null && toast !== undefined && toast.replace(/(^s*)|(s*$)/g, "").length !== 0){
      showToast(`${toast}不能为空`)
      return true;
    }
  }
}
