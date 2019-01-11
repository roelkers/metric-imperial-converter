/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    var firstLetterPos = input.search(/[a-zA-Z]/,'g');
    if(firstLetterPos === -1) firstLetterPos = input.length;
    var num = input.slice(0, firstLetterPos);

    var backslashPos = num.search(/\//,'g');
    //handle fraction
    if(backslashPos!== -1){
      var nominator = num.slice(0,backslashPos);
      var denominator = num.slice(backslashPos+1,num.length);
      if(nominator.length>0 && denominator.length >0){
        if(!(isNaN(nominator) || isNaN(denominator)))
          return parseFloat(nominator)/parseFloat(denominator);
      }
      return null;
    }
    var result = parseFloat(num);
    //handle NaN
    if(isNaN(result))
      return null;

    return result;
  };

  this.getUnit = function(input) {
    var firstLetterPos = input.search(/[a-zA-Z]/,'g');
    if(firstLetterPos === -1) return null
    var unit = input.slice(firstLetterPos, input.length);
    result = unit.toLowerCase();
    if(!(result==='gal'||result==='l'||result==='lbs'||result==='kg'||result==='mi'||result==='km'))
      return null;
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case('gal'):
        result = 'l';
      break;
      case('l'):
        result = 'gal';
      break;
      case('lbs'):
        result = 'kg';
      break;
      case('kg'):
        result = 'lbs';
      break;
      case('mi'):
        result = 'km';
      break;
      case('km'):
        result = 'mi';
      break;
      default:
        result = null;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case('gal'):
        result = 'gallons';
      break;
      case('l'):
        result = 'litres';
      break;
      case('lbs'):
        result = 'pounds';
      break;
      case('kg'):
        result = 'kilograms';
      break;
      case('mi'):
        result = 'miles';
      break;
      case('km'):
        result = 'kilometers';
      break;
      default:
        result = null;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch(initUnit){
      case('gal'):
        result = initNum*galToL;
      break;
      case('l'):
        result = initNum/galToL;
      break;
      case('lbs'):
        result = initNum*lbsToKg;
      break;
      case('kg'):
        result = initNum/lbsToKg;
      break;
      case('mi'):
        result = initNum*miToKm;
      break;
      case('km'):
        result = initNum/miToKm;
      break;
      default:
        result = null;
    }
    return Math.round(result * 100000) / 100000;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);

    return result;
  };

}

module.exports = ConvertHandler;
