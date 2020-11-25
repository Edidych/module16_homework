export function repeatWord(word, count) {
  let words = '';
  
  if(count >= 1 && typeof word === "string"){
    for (let i = 1; i <= count; ++i) {
      if(i === count){
        words += word + i + '.';
      }else{
        words += word + i + ', ';      
      }
    }
  }else{
   words = "Данные введены не корректно. Первым значением должно быть слово, вторым цифра. Количество повторений должно быть больше 1."
  }  
  return words;
}
