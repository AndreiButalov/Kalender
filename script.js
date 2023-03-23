
function getSchaltJahr(year) {
   return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) 
   || (year % 100 === 0 && year % 400 === 0)
}

function getFebruar(year) {
   return getSchaltJahr(year) ? 29 : 28
}

const monthLength = [31, getFebruar(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const monthNames = [
   'Januar',
   'Februar',
   'März',
   'April',
   'May',
   'Juni',
   'Juli',
   'August',
   'September',
   'Oktober',
   'November',
   'Dezember'
]
const weekDay = ['MO','DI','MI', 'DO', 'FR', 'SA', 'SO']