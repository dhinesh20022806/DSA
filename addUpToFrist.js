function addUptoFrist(n){
    let total = 0;
    for(let i = 0;i<=n;i++){
      total+=i
    }
    return total;
  }
  
  let t1 = performance.now();
   const result = addUptoFrist(6000000000);
  let t2 = performance.now();
  
  console.log((t2 - t1) / 1000 )
  
  console.log(result);


