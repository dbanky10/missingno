var findMissing = module.exports = function(arr1, arr2) {
  var newArr = [];
  
  filterArr1 = arr1.filter(function(val) {
    
    return arr2.indexOf(val) === -1;
  });
  
  filterArr2 = arr2.filter(function(val) {
    return arr1.indexOf(val) === -1;
  });
  newArr = filterArr1.concat(filterArr2);
  res = newArr;
  return res;
}