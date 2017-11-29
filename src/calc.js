module.exports = {
  sum(num1, num2) {
    return num1 + num2;
  },

  sub(num1, num2) {
    return num1 - num2;
  },

  mult(num1, num2) {
    return num1 * num2;
  },

  div(num1, num2) {
    return (num1 === 0) || (num2 === 0) ? "It's impossible to divide something by zero." : num1 / num2;
  },
};
