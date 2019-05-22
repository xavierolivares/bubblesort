describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual([]);
    });

    it('sorts one element', function() {
        expect(bubbleSort([1])).toEqual([1])
    });

    it ('sorts an odd number of elements', function() {
        // we can try implementing a beforeEach that contains an variable with array that we will sort
        // beforeEach()

        expect(bubbleSort([22,1,80,45,2,9,10])).toEqual([1,2,9,10,22,45,80])
    });

    it ('sorts an even number of elements', function() {
        // we can try implementing a beforeEach that contains an variable with array that we will sort
        // beforeEach()

        expect(bubbleSort([22,1,80,45,2,9,10,33])).toEqual([1,2,9,10,22,33,45,80])
    });

  });

