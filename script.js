function uniqueArray2(arr) {
    let a = [];
    for (let i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}

in_arr = [1,2,3,4,5,6,7,8,9,9,8,6,5,12,3,12,2,3,3,4,4];
out_arr = uniqueArray2(in_arr)
console.log(out_arr)