const nums = {
    numbers: [3, 5, 7, 90],
    multiplyBy: 6,
    multiplier(){
        return this.numbers.map((num) => this.multiplyBy * num);
    }

    
}

console.log(nums.multiplier());