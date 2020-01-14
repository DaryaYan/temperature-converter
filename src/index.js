exports.cToF = function(c) {
    // (0 °C × 9/5) + 32 = 32 °F
    const f = (c * 9 / 5) + 32;
    return f.toFixed(2);

}

exports.fToC = function(f) {
    // (32 °F − 32) × 5/9 = 0 °C
    const c = (f - 32) * 5 / 9;
    return c.toFixed(2);
}