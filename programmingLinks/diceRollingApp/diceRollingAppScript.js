

// Dice Rolling Application 

//create object for each dice 
var d2 = {
    name: 'd2',
    sides:2, 
    qty:0, 
    total:0,
    rolls: [],
    critHits: 0, 
    critMiss: 0,
    modifier: 0
}
var d4 = {
    name: 'd4',
    sides:4, 
    qty:0, 
    total:0,
    rolls: [],
    critHits: 0, 
    critMiss: 0,
    modifier: 0
}
var d6 = {
    name: 'd6',
    sides:6, 
    qty: 0, 
    total:0,
    rolls: [],
    critHits: 0, 
    critMiss: 0,
    modifier: 0
}
var d8 = {
    name: 'd8',
    sides:8, 
    qty: 0, 
    total:0,
    rolls: [],
    critHits: 0, 
    critMiss: 0,
    modifier: 0
}
var d10 = {
    name: 'd10',
    sides:10, 
    qty: 0, 
    total:0,
    rolls: [],
    critHits: 0, 
    critMiss: 0,
    modifier: 0
}
var d12 = {
    name: 'd12',
    sides:12, 
    qty: 0, 
    total:0,
    rolls: [],
    critHits: 0, 
    critMiss: 0,
    modifier: 0
}
var d20 = {
    name: 'd20',
    sides:20, 
    qty: 0, 
    total:0,
    rolls: [],
    critHits: 0, 
    critMiss: 0,
    modifier: 0
}

//make array to store all dice for easily looping through them
dice = [d2,d4,d6,d8,d10,d12,d20];

//function for random numbers 
function randomNumber(min, max){
    var result = Math.random()*max+min;
    return Math.floor(result); 
}



// *********************************Update the values of dice results and quantity
function updateDice(){
    var grandTotal = 0, linebreak;
    for (var i = 0; i < dice.length; i++){
        document.getElementById(dice[i].name + 'Total').innerHTML=dice[i].total;
        
        // document.getElementById(dice[i].name + 'Quantity').innerHTML=dice[i].qty;
        // Set text of individual roll buttons 
        // document.getElementById(dice[i].name + 'Roll').innerHTML='Roll ' + dice[i].qty+dice[i].name; 
        if(dice[i].modifier > 0){
            document.getElementById(dice[i].name + 'Roll').innerHTML='Roll ' +dice[i].qty+dice[i].name + '+'+dice[i].modifier;
        } else if (dice[i].modifier <0){
            document.getElementById(dice[i].name + 'Roll').innerHTML='Roll ' + dice[i].qty+dice[i].name +dice[i].modifier;
        } else {
            document.getElementById(dice[i].name + 'Roll').innerHTML='Roll ' + dice[i].qty+dice[i].name;
        }



        //set critHit and critMiss values
        var hit = document.getElementById(dice[i].name + 'CritHit');
        if (dice[i].critHits===0){
            hit.innerHTML = '';
        } else {
            hit.innerHTML = dice[i].critHits;
        }

        var miss = document.getElementById(dice[i].name + 'CritMiss');
        if (dice[i].critMiss===0){
            miss.innerHTML = '';
        } else {
            miss.innerHTML = dice[i].critMiss;  
        }



        //modify crit hit/miss box colors 
        if (dice[i].critHits >0){
            hit.style.background= 'lightblue';
            hit.style.color = 'white';
            hit.style.border = '1px solid white'
        } else {
            hit.style.background= 'black';
            hit.style.color = 'lightblue';
            hit.style.border = '1px solid lightblue'
        }

        if (dice[i].critMiss >0){
            miss.style.background= 'red';
            miss.style.color = 'black';
            miss.style.border = '1px solid black'
        } else {
            miss.style.background= 'black';
            miss.style.color = 'lightblue';
            miss.style.border = '1px solid lightblue'
        }

        //increase grand total 
        grandTotal += dice[i].total;
        //set modifier value 
        // document.getElementById(dice[i].name + 'Mod').innerHTML = dice[i].modifier;
    }
    document.getElementById('allResults').innerHTML =grandTotal;
    document.getElementById('d2Total').innerHTML = dice[0].total;

}


//*************************dice rolling function  */
function rollDice(input){
    var array = []; 
    var roll; 
    var critHits = 0, critMiss=0;
    //roll a die for each quantity 
    for (var i = 0; i < dice[input].qty; i++){
        roll = randomNumber(1,dice[input].sides); 
        array.push(roll); 
        if (roll === dice[input].sides){
            critHits +=1;
        } else if (roll === 1){
            critMiss +=1; 
        }
    }
    return [array, critHits,critMiss];
};

//***********summarize the value of all .rolls entries of dice array values */
function totals(input){
    //input is a position in the dice[] array
    var total = 0; 
    for (var i = 0; i < dice[input].rolls.length;i++){
        total+=dice[input].rolls[i];
    }
    total+=dice[input].modifier;
    return total; 
};

//set all dice rolls and totals using above functions
function rollAndTotal (input){
    if (input===-1){
    var absoluteTotal = 0; 
    for (var i = 0; i<dice.length;i++){
        rolling = rollDice(i);  
        dice[i].rolls = rolling[0];
        dice[i].total = totals(i);
        absoluteTotal+=totals(i);
        dice[i].critHits = rolling[1];
        dice[i].critMiss = rolling[2];
        console.log(dice[i].name + ' rolls = ' +dice[i].rolls)
        console.log(dice[i].name + 'total = ' +dice[i].total + ', critHits: ' + dice[i].critHits + ', critMiss: ' + dice[i].critMiss)
    }
    console.log('Absolute total = ' + absoluteTotal);
    }else{
    //input is which dice in the dice[] array to be rolled
    // for (var i = 0; i<dice[input].qty;i++){
        rolling = rollDice(input);
        dice[input].rolls = rolling[0];
        dice[input].total = totals(input);
        dice[input].critHits = rolling[1];
        dice[input].critMiss = rolling[2];
    // }
    console.log(dice[input].rolls + ' || ' + dice[input].critHits + ' || ' + dice[input].critMiss)
    console.log(dice[input].name +  ' total: ' + dice[input].total)
    }
    updateDice();
}

//function for changing dice quantities 
function changeDiceQty(diceNumber, increaseOrDecrease){
    if (increaseOrDecrease){
        dice[diceNumber].qty +=1;
    }else{
        dice[diceNumber].qty-=1;
    };
    if (dice[diceNumber].qty < 0){
        dice[diceNumber].qty = 0;
    };
    console.log(dice[diceNumber].qty);
    updateDice();
}



// ************************************modifier buttons and value function 

function changeModifier(diceNumber, increaseOrDecrease){
    if (increaseOrDecrease){
        console.log(dice[diceNumber].name)
        dice[diceNumber].modifier +=1;
    }else{
        dice[diceNumber].modifier -=1;
    }
    updateDice();
}










//***********************************************************Dice quantity buttons
var d2MinusButton = document.getElementById('d2-'); 
d2MinusButton.addEventListener('click', function(){changeDiceQty(0,0)});

var d2PlusButton = document.getElementById('d2+');
d2PlusButton.addEventListener('click', function(){changeDiceQty(0,1)});


var d4MinusButton = document.getElementById('d4-'); 
d4MinusButton.addEventListener('click', function(){changeDiceQty(1,0)});

var d4PlusButton = document.getElementById('d4+');
d4PlusButton.addEventListener('click', function(){changeDiceQty(1,1)});


var d6MinusButton = document.getElementById('d6-'); 
d6MinusButton.addEventListener('click', function(){changeDiceQty(2,0)});

var d6PlusButton = document.getElementById('d6+');
d6PlusButton.addEventListener('click', function(){changeDiceQty(2,1)});


var d8MinusButton = document.getElementById('d8-'); 
d8MinusButton.addEventListener('click', function(){changeDiceQty(3,0)});

var d8PlusButton = document.getElementById('d8+');
d8PlusButton.addEventListener('click', function(){changeDiceQty(3,1)});


var d10MinusButton = document.getElementById('d10-'); 
d10MinusButton.addEventListener('click', function(){changeDiceQty(4,0)});

var d10PlusButton = document.getElementById('d10+');
d10PlusButton.addEventListener('click', function(){changeDiceQty(4,1)});


var d12MinusButton = document.getElementById('d12-'); 
d12MinusButton.addEventListener('click', function(){changeDiceQty(5,0)});

var d12PlusButton = document.getElementById('d12+');
d12PlusButton.addEventListener('click', function(){changeDiceQty(5,1)});


var d20MinusButton = document.getElementById('d20-'); 
d20MinusButton.addEventListener('click', function(){changeDiceQty(6,0)});

var d20PlusButton = document.getElementById('d20+');
d20PlusButton.addEventListener('click', function(){changeDiceQty(6,1)});

//************************************************rolling buttons, starting with Roll All */
var rollAllButton = document.getElementById('rollAll'); 
rollAllButton.addEventListener('click',function(){rollAndTotal(-1)})



var rollD2Button = document.getElementById('d2Roll'); 
rollD2Button.addEventListener('click',function(){rollAndTotal(0)});

var rolld4Button = document.getElementById('d4Roll'); 
rolld4Button.addEventListener('click',function(){rollAndTotal(1)});
var rolld6Button = document.getElementById('d6Roll'); 
rolld6Button.addEventListener('click',function(){rollAndTotal(2)});
var rolld8Button = document.getElementById('d8Roll'); 
rolld8Button.addEventListener('click',function(){rollAndTotal(3)});
var rolld10Button = document.getElementById('d10Roll'); 
rolld10Button.addEventListener('click',function(){rollAndTotal(4)});
var rolld12Button = document.getElementById('d12Roll'); 
rolld12Button.addEventListener('click',function(){rollAndTotal(5)});
var rolld20Button = document.getElementById('d20Roll'); 
rolld20Button.addEventListener('click',function(){rollAndTotal(6)});

//for loop to assign all roll buttons their event listeners. Didn't work! 
// for (var i = 0; i<dice.length;i++){
//     var rollButton = document.getElementById(dice[i].name+'Roll'); 
//     rollButton.addEventListener('click',function(){rollAndTotal(i)});
// }


//**************************************************************Function to add all dice's event listeners with one loop, didn't work :(  */
// for (var i=0;i<dice.length;i++){
//     document.getElementById(dice[i].name+'-').addEventListener('click',function(){changeDiceQty(i,0)});
//     document.getElementById(dice[i].name+'+').addEventListener('click',function(){changeDiceQty(i,1)});
// }


//roll modifier buttons 
var d2ModMinusButton = document.getElementById('d2Mod-'); 
d2ModMinusButton.addEventListener('click', function(){changeModifier(0,0)});

var d2ModPlusButton = document.getElementById('d2Mod+');
d2ModPlusButton.addEventListener('click', function(){changeModifier(0,1)});


var d4ModMinusButton = document.getElementById('d4Mod-'); 
d4ModMinusButton.addEventListener('click', function(){changeModifier(1,0)});

var d4ModPlusButton = document.getElementById('d4Mod+');
d4ModPlusButton.addEventListener('click', function(){changeModifier(1,1)});


var d6ModMinusButton = document.getElementById('d6Mod-'); 
d6ModMinusButton.addEventListener('click', function(){changeModifier(2,0)});

var d6ModPlusButton = document.getElementById('d6Mod+');
d6ModPlusButton.addEventListener('click', function(){changeModifier(2,1)});


var d8ModMinusButton = document.getElementById('d8Mod-'); 
d8ModMinusButton.addEventListener('click', function(){changeModifier(3,0)});

var d8ModPlusButton = document.getElementById('d8Mod+');
d8ModPlusButton.addEventListener('click', function(){changeModifier(3,1)});


var d10ModMinusButton = document.getElementById('d10Mod-'); 
d10ModMinusButton.addEventListener('click', function(){changeModifier(4,0)});

var d10ModPlusButton = document.getElementById('d10Mod+');
d10ModPlusButton.addEventListener('click', function(){changeModifier(4,1)});


var d12ModMinusButton = document.getElementById('d12Mod-'); 
d12ModMinusButton.addEventListener('click', function(){changeModifier(5,0)});

var d12ModPlusButton = document.getElementById('d12Mod+');
d12ModPlusButton.addEventListener('click', function(){changeModifier(5,1)});


var d20ModMinusButton = document.getElementById('d20Mod-'); 
d20ModMinusButton.addEventListener('click', function(){changeModifier(6,0)});

var d20ModPlusButton = document.getElementById('d20Mod+');
d20ModPlusButton.addEventListener('click', function(){changeModifier(6,1)});



//*******************************************************************************************run first thing 
updateDice();