const expect = function(value) {

    return {
        toBe: function(val1){
            if(value === val1){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(val2){
            if(value !== val2){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
};

expect(55).toBe(55);
expect(55).notToBe(55);