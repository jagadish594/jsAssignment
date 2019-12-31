//Write a function that returns true if two arrays are identical, and false otherwise.

const isArrayIdentical = (arr1, arr2) =>{
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        let arr1Length = arr1.length;
        let arr2Length = arr2.length;
        if(arr1Length === arr2Length){
            for(let i=0; i<arr1Length; i++){
                if(arr1[i] !== arr2[i])
                    return false;
            }
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return 'Not valid array(s)';
    }

}

console.log(isArrayIdentical(["b"], ['b']));
