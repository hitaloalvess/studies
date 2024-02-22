
function sum(a: number, b: number) {
  return a + b;
}

describe('Sum', () => {
  it('should be able to sum two numbers', () => {
    const result = sum(2, 3);

    expect(result).toBe(5);
  })
})