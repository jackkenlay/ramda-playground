const R = require('ramda')

const arr1 = [1,2,3,4,5]
const thing = 6


const predicate = () => {
    return true;
}

const res = R.pipe(R.when(predicate, R.insert(0,thing)))(arr1)

console.log('result:')
console.log('res',res)



