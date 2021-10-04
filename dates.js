// date object = represents a moment in time since epoch (reference point)


// With only one argument - the number of miliseconds from the reference point
date1 = new Date(0);
date2 = new Date(100000000);
date3 = new Date(1000000000000);

// No argument will default to current date and time
date4 = new Date();

// Pass in more than one argument: year, month (0-11), day, hour, minute, second, milisecond
birthdate = new Date(1997, 11, 4);

// Pass in a string representation of a date
date5 = new Date("April 20, 2022 16:20:01:02");

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(birthdate);
console.log(date5);

// For date objects, we can extract: month, dayOfWeek, dayOfMonth, hours, minutes, seconds, miliseconds
console.log(birthdate.getFullYear());
console.log(birthdate.getMonth());   // 0-11
console.log(birthdate.getDay());     // 0-6
console.log(birthdate.getDate());
console.log(birthdate.getHours());
console.log(birthdate.getMinutes());
console.log(birthdate.getSeconds());
console.log(birthdate.getMilliseconds());

// You can also change the year, month, date, hour,... of the Date object
date5.setFullYear(2021);
date5.setMonth(11);
date5.setDate(04);
date5.setHours(6);
date5.setMinutes(34);
date5.setSeconds(5);
date5.setMilliseconds(2);

console.log(date5);