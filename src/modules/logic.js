function listToMatrix(list, elementsPerSubArray) {
    let matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

function indexToArray(index) {
    return [Math.floor(index/7), index % 7];
}

export {indexToArray, listToMatrix}