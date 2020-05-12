import Vue from 'vue'
function getDate(date,params) {
    const list  = date.split("T",1).join().split("-")
    if (params === "year") {
      return list[0]
    }else if(params === "month"){
      return list[1]
    }else if (params === 'day') {
      return list[2]
    }else{
      return list.join(".")
    }

}

Vue.filter("getdate",getDate)


