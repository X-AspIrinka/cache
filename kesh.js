function cacheCouter(str){//создаём функцию подсчёта кодов 
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function compareStrings(str1, str2) {// создаём функцию сравнения строк
  if (str1.length !== str2.length) {
      return false;
  }
  for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
          return false; 
      }
  }
  return true;
}

let fs = require('fs');
let inText, substring, extSub;
let i = 0, counter = 0;
inText = fs.readFileSync('str.txt');//считываем строку
inText = inText.toString();
substring = fs.readFileSync('substr.txt');// считываем подстроку
substring = substring.toString();
subLen = cacheCouter(substring);
for (i = 0; i <= inText.length - substring.length; i++){//проходим по тексту 
  extSub = inText.slice(i, i + substring.length);
  if (subLen/383 == cacheCouter(extSub)/383){//сравниваем кеши
    if (compareStrings(extSub, substring)){//сравниваем подстроку посимвольно, чтобы убедиться, что это не коллизия 
      counter+=1;//если все условия выполнились, добавяем в счетчик новое вхождение подстроки
    }
  }
}
console.log(counter);// выводим количество вхождений