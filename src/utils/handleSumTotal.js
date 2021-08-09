const handleSumTotal = (cart) => {
  const reducer = (accumulation, current) => accumulation + current.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export { handleSumTotal };
