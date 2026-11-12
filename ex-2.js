// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

let hasPromotion = lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent;
let hasPromotion2 = isPlatinum;
console.log(hasPromotion);
console.log(hasPromotion2);
