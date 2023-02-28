// code your solution here
function saturdayFun(activity = 'roller-skate') {
     let sat=`This Saturday, I want to ${activity}!`
     return sat
}



const mondayWork = function (activity = 'go to the office') {
let mon =   `This Monday, I will ${activity}.`
return mon
}

function wrapAdjective (flair='*'){
    return function inner(adj='special') {
return `You are ${flair}${adj}${flair}!`



    }
}



