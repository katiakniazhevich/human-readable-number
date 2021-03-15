module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero';
    }
    let ten = parseInt(number % 100 / 10);
    const hundred = parseInt(number / 100),
        one = parseInt(number % 10),
        oneName = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tenName = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '],
        hundredName = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '];

    if (ten == 1) {
        ten = number % 100;
        arrNumber = hundredName[hundred] + oneName[ten];
    } else {
        arrNumber = hundredName[hundred] + tenName[ten] + oneName[one];
    }

    return arrNumber.trim();
};
