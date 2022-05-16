/**
 * Код для определения остатка оплаты для студента буткемпа
 */

 // принимаем ли мы платежи
 const canPayment = true;
 
 // имя студента
 const studentName = 'your name';
 
 // цена на следуший месяц 
 const price = 120000;
 
 // первый взнос 
 const firstPayment = 50000;
 
 // скидка 
 const discount = 22;
 
 // формула расчета остатка платежа
 const totalPrice = price - (price / 100) * discount;
 
 // остаток для оплаты
 const remainingPayment = totalPrice - firstPayment;
 
 if(canPayment) {
   //
   if (remainingPayment === 0) {
     console.log(`Ты оплатил учебу полностью.`);
 
     //функция проверяюшая кто оплатил кто нет 
   } else {
     const message = `
   ${studentName}, ты оплатил ${firstPayment} руб. 
   К оплате осталось еще ${remainingPayment} руб.
   Твоя скидка: ${discount}%
   `;
 
     //я приму можете отправить по этому нрмеру на сбер +79226661313)
     console.log(message);
   }
 } else {
   console.log(`Мы сейчас не можем принять платеж`);
 }