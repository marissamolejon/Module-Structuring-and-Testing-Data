function getOrdinalNumber(num) {
 // Handle 11, 12, 13 as special cases
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }

    // Determine suffix based on last digit
    const lastDigit = num % 10;
    if (lastDigit === 1) return num + "st";
    if (lastDigit === 2) return num + "nd";
    if (lastDigit === 3) return num + "rd";
    return num + "th";
}

module.exports = getOrdinalNumber;