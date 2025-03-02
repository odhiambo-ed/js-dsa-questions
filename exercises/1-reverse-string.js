// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

function reverse(str) {
    reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

console.log(reverse('hi'));