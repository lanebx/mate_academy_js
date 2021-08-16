/* 

У цьому завданні тобі потрібно показати юзерам хто з їх друзів онлайн і готовий чатитись! Створи функцію whoIsOnline, яка приймає масив об'єктів friends і визначає хто з них online, offline чи away. Якщо юзер має статус online, але його не було в мережі більш ніж 10 хвилин (lastActivity > 10), то можна вважати, що фактично його статус вже away.

Приклад вхідних даних:

[{
  username: 'Alice',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]
Результат функції whoIsOnline:

{
  online: ['Alice'],
  offline: ['Lucy'],
  away: ['Bob']
}
Якщо в чаті немає активних юзерів, то результат має виглядати ось так:

{
  offline: ['Lucy'],
  away: ['Bob']
}
Якщо ваших друзів зовсім немає в чаті, то до функції прийде пустий масив []. У цьому випадку потрібно повернути пустий об'єкт {}.
*/

  function whoIsOnline(friends) {
    // write code here
    let res = {};
    let masOffline = [];
    let masOnline = [];
    let masAway = [];

    for (const usrer of friends) {
      if (usrer.status === 'offline') {
        masOffline.push(usrer.username);
        res['offline'] = masOffline;
      } 
      if (usrer.status === 'online' && usrer.lastActivity <= 10) {
        masOnline.push(usrer.username);
        res['online'] = masOnline;
      } 
      if (usrer.status === 'online' && usrer.lastActivity > 10) {
        masAway.push(usrer.username);
        res['away'] = masAway;
      } 
    }
    return res;
  }
