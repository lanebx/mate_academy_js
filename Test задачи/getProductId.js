/* 
Напиши функцію getProductId, яка приймає рядок, що представляє собою URL-адресу сторінки цього товару у вашому Інтернет-магазині і повертає ідентифікатор товару з рядка.

Усі URL-адреси відформатовані однаково, спочатку є домен exampleshop.com, потім у нас іде назва товару, розділена тире (-), потім іде буква p, що вказує на початок ідентифікатора товару, потім фактичний ідентифікатор (без обмеження довжини) і, нарешті, 8-значне представлення дати, коли товар було додано, а потім - .html.

Приклади:

exampleshop.com/fancy-coffee-cup-p-90764-12052019.html >> productID is 90764

exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html >> productID is 147

exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html >> productID is 942312798
*/

function getProductId(url) {
    let productID = '';
    for (let char = 0; char < url.length; char++){
      if (url[char] === '-' && url[char+1] === 'p') {
        for (let i = char+3; i < url.length; i++) {
          if ( url[i] >=0 && url[i] !== '-'){
            productID += url[i];
          }else{
            break;
          }
        }
      }
    }
    return productID;
  }
  