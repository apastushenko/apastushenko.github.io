/**
 * Created by pastushenko-av on 06.11.2015.
 */
function sum (a,b){
    return (b === undefined) ? function(b){return a+b;} : a+b;
//   if (b === undefined)
//       return function(b){
//         return a+b;
//       };
//   else return a+b;
}

console.log(sum(2,3)); //5
console.log(sum(2)(3)); //5

