describe("javascript allonge", function(){
  describe("value types", function(){
    it("4 is equal to 2+2", function(){
    
      expect(2+2).toEqual(4);
    });
    it("true is equal to true expression", function(){
    
      expect((2 + 2) === 4).toEqual(2 != 5);
    });
    it("two results that are equal, but not the same expressions", function(){

      //Here we compare the results themselves
      expect([2-1, 2, 2+1]).toEqual([1,2,3]);

      //Here compare the whole expression and we see that are not the same
      expect([2-1, 2, 2+1] === [1,2,3]).toEqual(false);
    });
    it("two expressions are equal, but not the same identity, they occupy different spaces", function(){
      expect([1,2,3]).toEqual([1,2,3]);

      //If we use toBe it would the same that ([1,2,3]===[1,2,3]) and that it false
      // expect([1,2,3]).toBe([1,2,3]);

      //If we compare to "false" this expression:
      expect([1,2,3]===[1,2,3]).toBe(false);

    });
  });
  
  
});
