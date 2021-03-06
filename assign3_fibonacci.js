var noOfTerms = 10;

function fibonacci(noTerms){
var current = 0;
 var next = 1;
  var sum = 0;

  var arr = [];

  arr.push(0);
  arr.push(1);

  for(var i = 0; i< (noTerms-2); i++) {
    sum = current + next;
    arr.push(sum);
    current = next;
    next = sum;
  }
  return arr;
}

var fibArr = fibonacci(noOfTerms);
console.log(fibArr);

//-----------------
// trying with a array

var current =0;
var next = 1;
var fibArray = [0,1];
for(i=2; i<noOfTerms ; i++) {
  fibArray.push(fibArray[i-1]+ fibArray[i-2]);
  }
console.log(fibArray);




//-----------------
// trying with a recursive function

var current = 0;
 var next = 1;
  var sum = 0;
  var i =1;


function fiboRecursive(terms){
  sum = current + next;
  console.log(sum);
    current = next;
    next = sum;
  if(i<terms){
    i++;
    fiboRecursive(terms);
  }
    else
      return;

}

 fiboRecursive(noOfTerms);
