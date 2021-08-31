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

    /* проверить на наличие ключа в хеш таблице */
    function searchByKeyInStore(strKey) {
        for (let j of store) {
            for (let i in j)
                if (j[i][0] === strKey) {
                    return i;
                } 
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

        /* проверить на наличие ключа в хеш таблице */
        searchByKey(key) {
            if (searchByKeyInStore(key) >= 0) {
                return `Ключ ${key} присутсвует в хеш таблице`;
            } else {
                return `Ключa ${key} НЕТ в хеш таблице`;
            }
        },

        /* читать значение */
        getElemet(key) {
            const sbk1 = searchByKeyInStore(key);
            if (sbk1 < 0) {
                return `Ключа "${key}" нет в хеш таблице`;
            }

            const index = hash(key);
            const array = store[index];
            const matchinIndex = getMatchingIndex(array, key);
            
            if(matchinIndex >= 0) {
                return store[index][matchinIndex][1];
            } 
        },

        /* выводит масив целиком */
        dump() {
            return store;
        }
    }
}

const ht = new HashTable();

ht.setElemet('knopka', 'Knopka');
ht.setElemet('120', 'Knopka120');
ht.setElemet('sisName', 'Vika');
ht.setElemet('name', 'Lana');

console.log( 
    ht.getElemet('name1'), 
    '\n', 
    ht.dump()
);
