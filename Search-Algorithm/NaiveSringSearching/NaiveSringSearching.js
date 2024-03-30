'use string';

const StringSearching = (longString, shortString)=>{
let count = 0;
    for(let i = 0; i< longString.length; i++){
        for(let j = 0; j< shortString.length; j++){
            // console.log(shortString[j], longString[i + j]);
            if(shortString[j] !== longString[i+j]) {
            //  console.log("BREAK!");
                break;
            }
            if (j === shortString.length - 1){
                // console.log("FOUND ONE!")
                count++;
            }

        }

    }

    return count;
}


let result = StringSearching("lorie lol lololed", "lol")

console.log(result);