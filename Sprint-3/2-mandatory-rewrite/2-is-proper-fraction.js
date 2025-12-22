function isProperFraction(numerator, denominator) {
    if (Math.abs(numerator)< denominator) return true;
    return false;
    
}

module.exports = isProperFraction;