const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // создаем пустой объект
  const stats = {};
            
  // проходимся по массиву
  for (let domain of domains) {
      // каждый элемент массива превращаем в перевернутый массив
      let levels = domain.split('.').reverse();
      console.log(levels);
      let current = '';
      
      // проходимся по каждому элементу перевернутого массива
      for (let level of levels) {
          // запихиваем в строку элемент массива
          current = current + `.${level}`;
          // запихиваем объект значение строки как ключ и проверяем есть ли оно уже, если есть увеличмваем его значение на 1
          if (stats[current] === undefined) {
              stats[current] = 1;
          } else {
              stats[current] += 1;
          }
      }
  }
  console.log(stats);    
  return stats; 
}

module.exports = {
  getDNSStats
};
