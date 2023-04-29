/**
 * Find max or min experiences in experiences array
 * 
 * @param {number[]} experiences 
 * @param {boolean} isMostExperienced 
 * @returns {boolean}
 */
const findMaxOrMinExperiences = (experiences, isMostExperienced) => {
    if (isMostExperienced) {
        return experiences.map((a, i) => [i, a]).sort((a, b) => a[1] - b[1]).slice(0, 2).map(value => value[0])
    } else {
        return experiences.map((a, i) => [i, a]).sort((a, b) => b[1] - a[1]).slice(0, 2).map(value => value[0])
    }
}
console.log(findMaxOrMinExperiences([1, 4, 3, 2, 8, 3], true))