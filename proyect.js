let teams = {"chivas": 0, "america": 0, "pumas": 0}

let participants = [["chivas","america"],["america","pumas"],["pumas", "chivas"]]

let winners = [0,0,1]
participants.forEach((round, i) => {
    teams[round[winners[i]]] +=1})

const key = Object.keys(teams)
let maximum = key[0]

for ([key,value] of teams.entries()){
    if(value > teams[maximum]){
        maximum = key
    }
}

console.log(maximum)