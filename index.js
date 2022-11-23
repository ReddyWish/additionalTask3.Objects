let suspects = {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"]
}

let killed = ["Lucas", "Bill"]

function getKiller (suspectInfo, deadPeople) {
let suspectInfoValues = Object.values(suspectInfo)
let howManyKilledSuspectMet = suspectInfoValues.map(item =>
item.filter(el => deadPeople.includes(el)))
let indexOfMainSuspect = (function () {
    for (let i = 0; i < howManyKilledSuspectMet.length; i++) {
        if (howManyKilledSuspectMet[i].length === deadPeople.length) {
            return howManyKilledSuspectMet.indexOf(howManyKilledSuspectMet[i])
        }
    }
})()
let keysOfSuspectInfo = Object.keys(suspectInfo)
let result = keysOfSuspectInfo[indexOfMainSuspect]

    return result
}

console.log(getKiller(suspects, killed))



