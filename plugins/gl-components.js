import http from "./http";


export function random_data(arr) {
  for(let i = 0,len = arr.length; i < len; i++){
    let currentRandom = parseInt(Math.random() * (len - 1));
    let current = arr[i];
    arr[i] = arr[currentRandom];
    arr[currentRandom] = current;
  }

}


export async function getPic(list,type) {
  if (type === 'Array'){
    const picPromise = list.map(v => http.request(v._links["wp:featuredmedia"][0]["href"]))
    const picList =  await Promise.all(picPromise)
    list.forEach((v, i) => {
      v['pic'] = picList[i]["guid"]["rendered"]
    })
    return list

  } else{
    const data = await http.request(list._links["wp:featuredmedia"][0]["href"])
    list.pic = data["guid"]["rendered"]
    return list
  }

}
