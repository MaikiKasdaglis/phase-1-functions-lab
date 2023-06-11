function distanceFromHqInBlocks(someValue){
    let blocks = someValue - 42
    if (blocks <= -1) { 
        blocks = (blocks * -1)
    }
 return blocks 
}

function distanceFromHqInFeet(someValue){
 return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet (start, stop) {
    let disTrav = start - stop
    if (disTrav <= -1) {
        disTrav = (disTrav *-1)
    }
    return disTrav * 264
}
// google abs method in javaScript 

function calculatesFarePrice (start, stop) {
    let feet = distanceTravelledInFeet(start, stop)
if (feet <= 400){
    return  0
} else if (feet <= 2000) {
    return ((feet - 400) * .02)

} else if (feet > 2000 && feet <= 2500) {
    return 25
} else {return 'cannot travel that far'}
}

