function getCounts(objects){
    let count = 0;

    // objects.forEach((item)=> item.p === item.q) ? count= count + 1 : "";
      for(let i=0; i < objects.length; i++){
        const item = objects[i];

        if(item.p === item.q){
            count = count + 1;
        }
      }

    console.log("count: ", count);
    return count;

}


const arr = [{p: 1, q:1}, {p: 2, q:3}, {p: 3, q: 4}, {p: 4, q: 4}, {p: 6, q: 7}]

const result = getCounts(arr)
console.log("result: ", result);