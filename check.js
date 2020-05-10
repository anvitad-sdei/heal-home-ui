let x = {
  '1': [
    {id: 1806, day: 1, week: 1, loggedDate: '2020-03-13 15:22:03'},
    {id: 1807, day: 2, week: 1, loggedDate: '2020-03-14 15:22:03'},
    {id: 1808, day: 3, week: 1, loggedDate: '2020-03-15 15:22:03'},
    {id: 1809, day: 4, week: 1, loggedDate: '2020-03-16 15:22:03'},
    {id: 1810, day: 5, week: 1, loggedDate: '2020-03-17 15:22:03'},
    {id: 1811, day: 6, week: 1, loggedDate: '2020-03-18 15:22:03'},
    {id: 1812, day: 7, week: 1, loggedDate: '2020-03-19 15:22:03'},
  ],
  '2': [
    {id: 1813, day: 8, week: 2, loggedDate: '2020-03-20 15:22:03'},
    {id: 1814, day: 9, week: 2, loggedDate: '2020-03-21 15:22:03'},
    {id: 1815, day: 10, week: 2, loggedDate: '2020-03-22 15:22:03'},
    {id: 1816, day: 11, week: 2, loggedDate: '2020-03-23 15:22:03'},
    {id: 1817, day: 12, week: 2, loggedDate: '2020-03-24 15:22:03'},
    {id: 1818, day: 13, week: 2, loggedDate: '2020-03-25 15:22:03'},
    {id: 1819, day: 14, week: 2, loggedDate: '2020-03-26 15:22:03'},
  ],
};
const defaultWeek = 1;
let p = Object.values(x).filter((item, i) => {
  /// console.log(item);
  return i === defaultWeek - 1;
});
console.log(p[0]);
