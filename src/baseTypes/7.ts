/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  Monday = "workday",
  Tuesday = "workday",
  Wednsday = "workday",
  Thursday = "workday",
  Friday = "workday",
  Sarturday = "weekday",
  Sunday = "weekday",
}
function isWeekend(day: Week): boolean {
  if (day === "workday") {
    return false;
  } else {
    return true;
  }
}

console.log(isWeekend(Week.Monday));
