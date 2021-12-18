//print odds 1-20
for(var x = 0; x < 21; x++){
    if( x % 2 !== 0){
        console.log(x);
    }
}

// decreasing multiples of 3 

for(var x = 100; x > 0; x--){
        if( x % 3 == 0){
            console.log(x);
        }
    }

    // // Print the sequence 
    var nums = [4, 2.5, 1, -0.5, -2, -3.5];

    for(var y = 0; y < nums.length; y++){
        console.log(nums[y]);
    }

    // Sigma 
    var sum = null;
    for(var t = 0; t < 101; t++){
        sum += t;
    }
    console.log(sum);


    // Factorial 



    var product = 1;
    for(var times = 1 ; times < 13; times++){
        product *= times;
    }
    console.log(product);