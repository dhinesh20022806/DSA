'use strict';
function countUpAndDown(n){

    console.log(`Going Up!`);

    for(let i = 0;i<= n; i++){
        console.log(i);
    }

    console.log(`At the top\n Going Down...`);

    for(let i = n; i >= 0; i--){
        console.log(i);
    }
    console.log(`Back down, Bye`);
}

countUpAndDown(10)