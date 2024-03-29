/**
 * Returns a random element from the given array.
 * @param {Array} arr[] - The array to choose from.
 * @returns
 */
const choice = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

export default choice;
