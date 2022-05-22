const formatNumber = (number: Number) => {
    const array = number.toString().split('');
    return array.slice(0, -2).join('') + ',' + array.slice(-2, array.length).join('') + '€';
}

module.exports = formatNumber;