function trouverchainePlusLong(tab) {
    let plusLongue = "";
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].length > plusLongue.length) {
            plusLongue = tab[i];
            
        }
    }
    return plusLongue;
}


const chaine = ["aa", "aaaa", "aaaaa", "aaaaa"];
console.log(trouverchainePlusLong(chaine)); 


function findLongestString(tab) {
    return tab.reduce((Plus, courant) => {
        return courant.length > Plus.length ? courant : Plus;
    }, "");
}

 
 
const strings = ["aaa", "aaaa", "aaa", "aaaaa"];
console.log(findLongestString(strings)); 


 //autre solutiion 
 let autrsolution=(Myarray) =>{
     Myarray.sort()
        return Myarray[Myarray.length-1];
     

}
console.log(autrsolution(Myarray));

// ex 2

