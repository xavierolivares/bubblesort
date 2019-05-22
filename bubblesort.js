function bubbleSort (array) {

// create a for loop to iterate through array

let swapCase = true;

    while (swapCase) {
        swapCase = false;
        for (let i = 1; i < array.length; i++) {     
            // we need to identify two elements
            let elementToChange = array[i];
            if (array[i-1] > array[i]) {
                array[i] = array[i-1]
                array[i-1] = elementToChange
                swapCase = true;
            }
            // we need to check which is greater
            // we need to swap the elements
            // are we mutating the array? Yes
    
            //we should have logic that checks to see if we've swapped. if true, let's swap again.
        }
    }
    return array;
}

// CREATE SWAP FUNCTION
// function swap (elOne, elTwo) {
//     let arr = [elOne, elTwo]
// }