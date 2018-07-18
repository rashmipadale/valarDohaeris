import { Injectable } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Injectable()
export class UtilService {

  constructor() { }

  // type: primary, danger, success, warning, info
  notifyMsg(type, msg){
    $.notify({
      icon : "now-ui-icons ui-1_simple-remove",
      message: msg
    },{
      type:type,
      timer:1000,
      placement:{
        from:'bottom',
        align:'center'
      }
    });
  }

}
