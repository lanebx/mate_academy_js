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

    function getMatchingIndex(array, key) {
        for(let i = 0; i< array.length; i++) {
            if(array[i][0] === key) return i;
        }
        return -1;
    }
    
    return {
        /* установить значение */
        setElemet(key, value) {
            const index = hash(key);

            if(!store[index]){
                store[index] = [[key, value]];
            } else {
                const array = store[index];
                const matchinIndex = getMatchingIndex(array, key);

                if(matchinIndex >= 0) {
                    store[index][matchinIndex] = [key, value];
                } else {
                    store[index].push([key, value]);
                }
            }

            
        },

        /* читать значение */
        getElemet(key) {
            const index = hash(key);
            const array = store[index];
            const matchinIndex = getMatchingIndex(array, key);
            
            if(matchinIndex >= 0) {
                return console.log(store[index][matchinIndex][1]);
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
ht.setElemet('k7op4a', 'Knopka12');
ht.setElemet('knopkaknopka', 'Vika');
ht.setElemet('knopkakpkkji', 'Lana');

ht.getElemet('knopkakpkkji');
ht.dump();
