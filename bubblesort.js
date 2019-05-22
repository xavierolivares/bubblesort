function bubbleSort (array) {

// create a for loop to iterate through array
// maybe use recursion

let swapCase = true;

    while (swapCase) {
        let count = 0;
        for (let i = 1; i < array.length; i++) {     
            // we need to identify two elements
            let firstEl = array[i-1];
            let secondEl = array[i];
    
            if (firstEl > secondEl) {
                array[i] = firstEl
                array[i-1] = secondEl
                swapCase = true;
                count++;
            }
            // we need to check which is greater
            // we need to swap the elements
            // are we mutating the array? Yes
    
            //we should have logic that checks to see if we've swapped. if true, let's swap again.
        }

        if (count === 0) {
            swapCase = false;
        }

    }
    return array;
}

// CREATE SWAP FUNCTION
// function swap (elOne, elTwo) {
//     let arr = [elOne, elTwo]
// }