function HashTable(s = 13) {
    /* что бы структура даных была быстрее, использовать статические масивы */
    const store = [];
    const size = s;


    /* Превращвет строку в число */
    function hash(string) {
        let index = 0;

        for (let i = 0; i < string.length; i++) {
            index += string.charCodeAt(i) * (i+1);
        }

        return index % size;
    }
    
    return {
        /* установить значение */
        setElemet(key, value) {
            const index = hash(key);
            store[index] = value;
        },
        /* читать значение */
        getElemet(key) {
            const index = hash(key);
            return console.log(store[index]);
        },
        /* выводит масив целиком */
        dump() {
            return console.log(store);
        }
    }
}

const ht = new HashTable();

ht.setElemet('knopka', 'Knopka');
ht.setElemet('k7op5a', 'Knopka');
ht.setElemet('knopkaknopka', 'Vika');
ht.setElemet('knopkakpkkji', 'Lana');

ht.getElemet('knopka');
ht.dump();
