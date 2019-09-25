var traits, gender, physique, face, skin,hair,clothing,virtue,vice,speech,background,misfortunes;
var genderValue, physiqueValue, faceValue, skinValue,hairValue,clothingValue,virtueValue,viceValue,speechValue,backgroundValue,misfortunesValue;
traits = [
  gender = ['Gender','Male','Female'],
  physique = ['Physique','Athletic','Brawny','Corpulent','Delicate','Gaunt','Hulking','Lanky','Ripped','Rugged','Scrawny','Short','Stout','Sinewy','Tiny','Slender','Towering','Flabby','Willowy','Statuesque','Wiry'],
  face = ['Face','Bloated','Blunt','Bony','Chiseld','Delicate','Elongated','Patrician','Pinched','Hawkish','Broken','Impish','Narrow','Ratlike','Round','Sunken','Sharp','Soft','Square','Wide','Wolfish'],
  skin = ['Skin','Battle Scar','Oily','Reeking','Birthmark','Pale','Tattooed','Burn Scar','Perfect','Rosy','Dark','Pierced','Rough','Makeup','Pockmarked','Sallow','Sunburned','Tanned','War Paint','Weathered','Whip Scar'],
  hair = ['Hair','Bald','Braided','Bristly','Cropped','Curly','Disheveled','Dreadlocks','Filthy','Frizzy','Greased','Limp','Long','Luxurious','Mohawk','Oily','Ponytail','Silky','Topknot','Wavy','Wispy'],
  clothing = ['Clothing','Antique','Bloody','Ceremonial','Decorated','Eccentric','Elegant','Fashionable','Filthy','Flamboyant','Stained','Foreign','Frayed','Frumpy','Livery','Oversized','Patched','Perfumed','Rancid','Torn','Undersize'],
  virtue = ['Virtue','Ambitious','Cautious','Courageous','Courteous','Curious','Disciplined','Focused','Generous','Gregarious','Honest','Honorable','Humble','Idealistic','Just','Loyal','Merciful','Righteous','Serene','Stoic','Tolerant'],
  vice = ['Vice','Aggressive','Arrogant','Bitter','Cowardly','Cruel','Deceitful','Flippant','Gluttonous ','Greedy','Irascible','Lazy','Nervous','Prejudiced','Reckless','Rude','Suspicious','Vain','Vengeful','Wasteful','Whiny'],
  speech = ['Speech','Blunt','Booming','Breathy','Cryptic','Drawling','Droning','Flowery','Formal','Gravelly','Hoarse','Mumbling','Precise','Quaint','Rambling','Rapid-fire','Dialect','Slow','Squeaky','Stuttering','Whispery'],
  Background = ['Background','Alchemist','Beggar','Butcher','Burglar','Charlatan','Cleric','Cook','Cultist','Gambler','Herbalist','Magician','Mariner','Mercenary','Merchant','Outlaw','Performer','Pickpocket','Smuggler','Student','Tracker'],
  misfortunes = ['Misfortune','Abandoned','Addicted','Blackmailed','Condemned','Cursed','Defrauded','Demoted','Discredited','Disowned','Exiled','Framed','Haunted','Kidnapped','Mutilated','Poor','Pursued','Rejected','Replaced','Robbed','Suspected']
  ];
var traitValues = [genderValue,physiqueValue,faceValue,skinValue,hairValue,clothingValue,virtueValue,viceValue,speechValue,backgroundValue,misfortunesValue];
//ability score variables 
var strengthBonus,dexterityBonus,constitutionBonus,intelligenceBonus,wisdomBonus,charismaBonus, strengthDefense,dexterityDefense,constitutionDefense,intelligenceDefense,wisdomDefense,charismaDefense,hp;
//PC armor stats 
var bodyArmored=false,headShieldArmored=false,pcBodyArmorName='',pcBodyArmorDefense=0, pcBodyArmorSlot=0, pcBodyArmorQuality=0, bodySlotsPlural;
var headArmored=false, pcHeadArmorName='',pcHeadArmorDefense=0, pcHeadArmorSlot=0, pcHeadArmorQuality=0, headSlotsPlural=false;
var shieldArmored=false, pcShieldArmorName='',pcShieldArmorDefense=0, pcShieldArmorSlot=0, pcShieldArmorQuality=0, shieldSlotsPlural=false;
//armor and their stats 
var noArmor = new Armor ('',11,0,0,0);
var shield = new Armor('shield',1,1,1,40); 
var helmet = new Armor('helmet',1,1,1,40);
var gambeson = new Armor('gambeson',12,1,3,60); 
var brigandine = new Armor('brigandine',13,2,4,500); 
var chain = new Armor('chain',14,3,5,1200); 
var halfPlate = new Armor('half plate',15,4,6,4000); 
var fullPlate = new Armor('full plate',16,5,7,8000);

//items variables 
let generalGear1=["an air bladder", "a bear trap", "a shovel", "a bellows", "grease", "a saw", "a bucket", "caltrops","a chisel", "a drill", "a fishing rod", "marbles", "glue", "a pick", "an hourglass", "a net", "tongs", "lockpicks",'a metal file','nails'];
let generalGear2=[ "incense", "a sponge", "a lens", "perfume", "a horn", "a bottle", "soap", "a spyglass", "a tar pot", "twine", "fake jewels", "a blank book", "a card deck", "a dice set", "cooking pots", "face paint", "a whistle", "an instrument", "quill & ink", "a small bell"];
let dungeoneeringGear =[ "50 feet of rope", "a crowbar", "a lantern", "a 10 foot pole", "pulleys", "a tinderbox", "lamp oil", "a sack", "5 candles", "a grappling hook","a padlock", "a 3 person tent", "10 feet of chain", "a hammer", "manacles", "5 spikes", "10 pieces of chalk", "a waterskin", "a mirror", "5 torches" ];




randomNumber = function(max,min=0){
  return Math.floor(Math.random()*Math.floor(max))+min;
}



//update all the names of the trait buttons
var setAllButtonNames = function(){
  $('#gender').text('Gender: '+ traitValues[0]);
  $('#physique').text('Physique: '+ traitValues[1]);
  $('#face').text('Face: '+ traitValues[2]);
  $('#skin').text('Skin: '+ traitValues[3]);
  $('#hair').text('Hair: '+ traitValues[4]);
  $('#clothing').text('Clothing: '+ traitValues[5]);
  $('#virtue').text('Virtue: '+ traitValues[6]);
  $('#vice').text('Vice: '+ traitValues[7]);
  $('#speech').text('Speech: '+ traitValues[8]);
  $('#background').text('Background: '+ traitValues[9]);
  $('#misfortune').text('Misfortune: '+ traitValues[10]);
}

//set each trait to a random value
setAllTraitsRandom = function(){
for (let i = 0; i < traitValues.length;i++){
  traitValues[i]=traits[i][randomNumber(traits[i].length-1,1)];
};
setAllButtonNames();
};
//call it so it runs when the website starts
setAllTraitsRandom();

//function to randomize one trait
var setArrayValue = function(x){
  traitValues[x]=traits[x][randomNumber(traits[x].length-1,1)];
  setAllButtonNames();
};



//run on load 
$(document).ready(function(){
  $('#gender').html('Gender: '+ traitValues[0]);
  $('#physique').html('Physique: '+ traitValues[1]);
  $('#face').html('Face: '+ traitValues[2]);
  $('#skin').html('Skin: '+ traitValues[3]);
  $('#hair').html('Hair: '+ traitValues[4]);
  $('#clothing').html('Clothing: '+ traitValues[5]);
  $('#virtue').html('Virtue: '+ traitValues[6]);
  $('#vice').html('Vice: '+ traitValues[7]);
  $('#speech').html('Speech: '+ traitValues[8]);
  $('#background').html('Background: '+ traitValues[9]);
  $('#misfortune').html('Misfortune: '+ traitValues[10]);
  
  setAllAbilityScoresRandom();
  setItemStatsRandom();
});

//return the lowest of three values. Used for generating ability scores. 
findLeast = function(a,b,c){
  if (a>=b && b>=c){
    return c;
  }else if (b>=a && a>=c){
    return c;
  }else if (a>=c && c>=b){
    return b;
  }else if(c>=a && a>=b){
    return b;
  }else if (b>=c && c>=a){
    return a;
  }else if(c>=b && b>=a){
    return a;
  }else if(c===b && b===a){
    return a;
  }
}

function randomAbilityScore (){
  a = findLeast(randomNumber(6,1),randomNumber(6,1),randomNumber(6,1));
  return a;
}

//randomize the ability scores 
setAllAbilityScoresRandom = function (){
  strengthBonus = randomAbilityScore();
  dexterityBonus = randomAbilityScore();
  constitutionBonus = randomAbilityScore();
  intelligenceBonus = randomAbilityScore();
  wisdomBonus = randomAbilityScore();
  charismaBonus = randomAbilityScore();
  strengthDefense = strengthBonus+10;
  dexterityDefense = dexterityBonus+10;
  constitutionDefense = constitutionBonus+10;
  intelligenceDefense = intelligenceBonus+10;
  wisdomDefense = wisdomBonus+10;
  charismaDefense = charismaBonus+10;
  hp = randomNumber(8,1);
  $('#strength').text('' + strengthBonus + ', ' + strengthDefense);
  $('#dexterity').text('' + dexterityBonus + ', ' + dexterityDefense);
  $('#constitution').text('' + constitutionBonus + ', ' + constitutionDefense);
  $('#intelligence').text('' + intelligenceBonus + ', ' + intelligenceDefense);
  $('#wisdom').text('' + wisdomBonus + ', ' + wisdomDefense);
  $('#charisma').text('' + charismaBonus + ', ' + charismaDefense);

  $('#testStat').text('Test Stat: ')

  $('#hp').text('Your health is ' + hp + ' and your healing rate is 1d8+' + constitutionBonus);

  // update stat-dependent lines in Items 
  $('#itemSlots').text('You start with ' + (constitutionDefense)+' item slots.');
  $('#itemSlotsRemaining').text('Each of these items takes up 1 slot (' +(5+pcBodyArmorSlot+pcHeadArmorSlot+pcShieldArmorSlot)+ ' total) unless the DM says otherwise. You have '+(constitutionDefense-(5+pcBodyArmorSlot+pcHeadArmorSlot+pcShieldArmorSlot))+' item slots remaining. Pick a starting weapon from the Weapons table on page 3.');
}

//determine the body armor worn. This is more complex than the helmet and shield generation so it gets its own function. 
rollArmor = function(){
  pcBodyArmorDefense=11; 
  pcBodyArmorName='';
  pcBodyArmorQuality=0; 
  pcBodyArmorSlot=0;
  armored = false; 
  let num = randomNumber(20,1); 
  if (num <4){
    setArmor('body',noArmor);
  }else if(num >3 && num<15){
    setArmor('body',gambeson);
  }else if (num>14 && num<20){
    setArmor('body',brigandine);
  }else {
    setArmor('body',chain);
  }
  if (num>3){
    bodyArmored=true; 
  }else{
    bodyArmored=false;
  }
}

//generate the helmet and shield equipment based on a d20 roll 
rollHelmetAndShield = function(){
  let num = randomNumber(20,1);
  if (num <=13){
    headArmored=false;
    shieldArmored=false;
    pcShieldArmorName = '';
    pcShieldArmorDefense = 0; 
    pcShieldArmorSlot = 0; 
    pcShieldArmorQuality = 1; 
    pcHeadArmorName = ''; 
    pcHeadArmorDefense = 0; 
    pcHeadArmorSlot = 0; 
    pcheadarmor = 0;
  }
  if (num >= 14 && num <=16){
    //helmet 
    headArmored = true; 
    setArmor('helmet')
  }else if (num >= 17 && num <=19){
    //shield 
    shieldArmored = true;
    setArmor('shield');  
  }else if (num === 20){
    //helmet and shield 
    headArmored = true; 
    shieldArmored = true; 
    setArmor('shieldAndHelmet');
  }
}

setArmor = function(place,type=0){
  if(place == 'body'){
  pcBodyArmorName=type.name;
  pcBodyArmorDefense = type.defense;
  pcBodyArmorSlot = type.slot;
  pcBodyArmorQuality = type.quality; 
  console.log(pcBodyArmorName);
  console.log(bodyArmored);
  if(pcBodyArmorSlot >1){
    bodySlotsPlural = 'slots';
  }else{
    bodySlotsPlural = 'slot';
  }
}
  else if(place == 'shield'){
    pcShieldArmorName = 'shield';
    pcShieldArmorDefense = 1; 
    pcShieldArmorSlot = 1; 
    pcShieldArmorQuality = 1; 
  }else if (place == 'helmet'){
    pcHeadArmorName = 'helmet'; 
    pcHeadArmorDefense = 1; 
    pcHeadArmorSlot = 1; 
    pcheadarmor = 1; 
  }else if (place == 'shieldAndHelmet'){
    pcHeadArmorName = 'helmet'; 
    pcHeadArmorDefense = 1; 
    pcHeadArmorSlot = 1; 
    pcheadarmor = 1; 
    pcShieldArmorName = 'shield';
    pcShieldArmorDefense = 1; 
    pcShieldArmorSlot = 1; 
    pcShieldArmorQuality = 1; 
  }
}

setItemStatsRandom = function(){
  rollHelmetAndShield(); 
  rollArmor();
  $('#itemSlots').text('You start with ' + (constitutionDefense)+' item slots.');

  // $('#itemSlots').text('Item slots: ' + (constitutionDefense-(pcBodyArmorSlot+pcHeadArmorSlot+pcShieldArmorSlot)));

  // seperate body/head/shield armor. Write these to seperate lines and make the last line the total armor defense of all items. 
  if (bodyArmored){
    $('#bodyArmor').text('Your ' + pcBodyArmorName + " body armor's defense is " + pcBodyArmorDefense + ' and takes up ' + pcBodyArmorSlot + ' item  ' + bodySlotsPlural + '.');
  }
  else{$('#bodyArmor').text('Your body is unarmored. Your body armor defense is 11 and your armor bonus is 1.');
  }
  if (headArmored){
    $('#headArmor').show();
    $('#headArmor').text('Your helmet adds ' + pcHeadArmorDefense + ' to your defense and takes up ' + pcHeadArmorSlot + ' item slot.');
  }
  else{$('#headArmor').hide();
  }
  if (shieldArmored){
    $('#shieldArmor').show();
    $('#shieldArmor').text('Your shield adds ' + pcShieldArmorDefense + ' to your defense and takes up ' + pcShieldArmorSlot + ' item slot.');
  }
  else{$('#shieldArmor').hide();
};
  $('#totalArmor').text('Your total armor bonus is ' + (pcBodyArmorDefense+pcHeadArmorDefense+pcShieldArmorDefense)+'.'); 

  $('#otherGear').text('You carry 2 rations, ' + dungeoneeringGear[randomNumber(dungeoneeringGear.length-1,1)] + ', ' + dungeoneeringGear[randomNumber(dungeoneeringGear.length-1,1)] + ', ' + generalGear1[randomNumber(generalGear1.length-1,1)] + ', and ' + generalGear2[randomNumber(generalGear2.length-1,1)] + '.');
  $('#itemSlotsRemaining').text('Each of these items takes up 1 slot ('+(5+pcBodyArmorSlot+pcHeadArmorSlot+pcShieldArmorSlot)+' total) unless the DM says otherwise. You have '+(constitutionDefense-(5+pcBodyArmorSlot+pcHeadArmorSlot+pcShieldArmorSlot))+' item slots remaining. Pick a starting weapon from the Weapons table on page 3.');
  // $('#remainingItemSlots').text('You have '+(constitutionDefense-5)+' item slots remaining. Pick a starting weapon from the Weapons table on page 3.');
  // lines with rules I'm unsure about: 
  // $('#dungeoneeringGear2').text('Your total armor bonus is ' + (pcBodyArmorDefense+pcHeadArmorDefense+pcShieldArmorDefense)); 
  // $('#generalGear1').text('Your total armor bonus is ' + (pcBodyArmorDefense+pcHeadArmorDefense+pcShieldArmorDefense)); 
  // $('#generalGear2').text('Your total armor bonus is ' + (pcBodyArmorDefense+pcHeadArmorDefense+pcShieldArmorDefense)); 


};

// arrayToString = function(array,returnArray){
//     for (let i = 0;i<array.length;i++){
//       returnArray[i]=array[i].tostring();
//     }
//     return returnArray;
// }
