'use strict';

module.exports = function(arr) {
    // Argument check for array
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Argument should be an array');
    }

    // Validate array content to be non zero numbers
    let result = 0;
    arr.forEach((x) => {
        if (typeof x !== 'number' || isNaN(x) || x <= 0) {
            throw new Error('Array should contain non-zero positive numbers');
        }

        result += Math.log(x);
    });

    // Return for single length array
    if (arr.length === 1) {
        return arr[0];
    }

    // Calculate geometric mean
    result /= arr.length;
    result = Math.exp(result);

    return result;
};
