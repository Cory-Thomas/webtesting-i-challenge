const enhancer = require('./enhancer.js');

describe( "repair()", function () {
    it( "should repair item's durability to 100", function () {
      const item = {
          name: "hammer",
          durability: 50,
          enhancement: 5, 
      }
      
      const updatedItem = enhancer.repair(item);
      
      expect(updatedItem.durability).toBe(100);
    });
});

describe( "success()", function () {
    it( "should add +1 enhancement", function () {
      const item = {
          name: "hammer",
          durability: 50,
          enhancement: 5, 
      }
      
      const updatedItem = enhancer.success(item);
      
      expect( updatedItem.enhancement).toBe(6);
    });

    it( "should not add +1 if enhancement is already 20", function() {
        const item = {
            name: "hammer",
            durability: 50,
            enhancement: 20, 
        }
        
        const updatedItem = enhancer.success(item);
        
        expect( updatedItem.enhancement).toBe(20);
    })

});

describe( "fail()", function () {
    it( "item's enhancment less than 15, should decrease durability by 5", function () {
      const item = {
          name: "hammer",
          durability: 50,
          enhancement: 10, 
      }
      
      const updatedItem = enhancer.fail(item);
      
      expect( updatedItem.durability ).toBe(45);
    });

    it( "item's enhancement more than 14 but less than 17, should decrease durability by 10 and leave enhancement unchanged", function () {
        const item = {
            name: "hammer",
            durability: 40,
            enhancement: 16, 
        }
        
        const updatedItem = enhancer.fail(item);
        
        expect( updatedItem.durability ).toBe(30);
        expect( updatedItem.enhancement ).toBe(16);
      });

    it( "item's enhancement is 17 or greater, should decrease durability by 10 AND decrease enhancement by 1", function () {
        const item = {
            name: "hammer",
            durability: 40,
            enhancement: 18, 
        }
        
        const updatedItem = enhancer.fail(item);
        
        expect( updatedItem.durability) .toBe(30);
        expect( updatedItem.enhancement ).toBe(17);
      });
});

