/* 

Хороший день для пікніка. 
Друзі вирішили вибратися у ліс та відпочити. 
Приїхавши вони дізналися, що у них залишилося дуже мало пального. 
Є два варіанти:
Зателефонувати знайомим і попросити привезти пального.
Дістатися найближчої заправної станції самостійно.

Знаючи кількість пального, яка залишилася fuelRemaining, 
відстань у кілометрах до найближчої заправки distance 
та розхід пального на 100км fuelСonsumption 
ми можемо допомогти людям прийняти рішення за допомогою 
функції makeDeсision.
*/

function makeDecision(fuelRemaining, distance, fuelConsumption) {
    // write code here
    if (fuelRemaining >= 0 && distance > 0 && fuelConsumption > 0) {
        let oneKm = 100 / fuelConsumption;
        if (oneKm * fuelRemaining >= distance) {
            return 'reach gas station by themselves';
        } else {
            return 'ask for help';
        }
    } else {
        return 'please, enter the valid data.';
    }
}