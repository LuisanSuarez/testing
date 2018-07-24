const strings1 = ['short', 'first long string!!', 'medium', 'abcdefgisdflmnopqdr'];


function longestString(arr) {
  let ans = arr[0]
  for (i=1; i<arr.length; i++){
    arr[i].length > ans.length ? ans = arr[i] : ''
  }

  console.log(ans)
}

longestString(strings1)

console.log(strings1[1].length );
console.log(strings1[3].length);

stringy = "Now I've made some changes!"
console.log(stringy);
