export const isAdult = (age) => {
    return age >= 18;
} 


export const canDrink = (age) => {
    return age >= 21;
}


export default (age) => age >= 65;