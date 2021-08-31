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

            if(!store[index] || store[index][0] === key){
                store[index] = [key, value];
            } else {
                console.log(`WARNING при добавлении "${key}" происходит коллизия`)
            }

            
        },

        /* читать значение */
        getElemet(key) {
            const index = hash(key);

            if(store[index]){
                return console.log(store[index][1]);
            }
        },

        /* выводит масив целиком */
        dump() {
            return console.log(store);
        }
    }
}

const ht = new HashTable();

ht.setElemet('knopka', 'Knopka');
ht.setElemet('k7op7a', 'Knopka');
ht.setElemet('knopkaknopka', 'Vika');
ht.setElemet('knopkakpkkji', 'Lana');

ht.getElemet('knopka');
ht.dump();
