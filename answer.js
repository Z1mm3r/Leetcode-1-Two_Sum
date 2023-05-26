var twoSum = function(nums, target) {

    //Obj where keys for values are the index with answer.
    let compliment = {}

    for(let i = 0; i < nums.length; i++){

        //What value do we need for the target?
        let comp = target - nums[i];

        //If the value has been set, we've found a match
        if(compliment[comp] != undefined){
            return [compliment[comp],i];
        }

        //else store location of value.
        else{
            compliment[nums[i]] = i;
        }
    }

};
