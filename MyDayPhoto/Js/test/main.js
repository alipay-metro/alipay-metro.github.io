/**
 * Created by metrokobe on 15/7/28. ----- alipay
 */
require.config({
  shim{
    'angular':{
      exports:'angular'
    },
    'angular-route':{
      deps:'angular',
      exports:'angular-route'
    }
  }
})
