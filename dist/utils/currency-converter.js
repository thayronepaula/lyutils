"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDecimals = exports.brlToCents = void 0;
var baseConverter = function (value, decimals, isBRL) {
    if (isBRL === void 0) { isBRL = false; }
    var newValueStr = value.toString();
    var _a = newValueStr.split('.'), int = _a[0], decimal = _a[1];
    var parsedDecimal = decimal
        ? decimal.substring(0, decimals).padEnd(decimals, '0')
        : '00';
    return isBRL ? "".concat(int).concat(parsedDecimal) : "".concat(int, ".").concat(parsedDecimal);
};
/**
 * Converts a number to a string with the specified number of decimals
 * @param {number | string} value Number to be converted
 * @param {number } decimals Number of decimals
 * @returns {number}
 * @summary Resolves the problem of floating point numbers in JavaScript
 * @see https://0.30000000000000004.com/
 * @example
 *  toDecimals(0.2 + 0.1, 0) // 3.1415
 *  toDecimals(3.14159265359, 2) // 3.14
 */
var toDecimals = function (value, decimals) {
    return parseFloat(baseConverter(value, decimals));
};
exports.toDecimals = toDecimals;
/**
 * Converts a BRL value to cents
 * @param value BRL value
 * @returns {number} BRL value in cents
 * @summary Resolves the problem of floating point numbers in JavaScript
 * @see https://0.30000000000000004.com/
 * @example
 * brlToCents(40) // 4000
 * brlToCents(3.5) // 350
 */
var brlToCents = function (value) {
    return parseInt(baseConverter(value, 2, true));
};
exports.brlToCents = brlToCents;
