import makeOwnerHeadIO from "./makeOwnerHead";

  const sum = (a,b) => a+b;
  describe('primitive', () => {
    it('sum should sum', () => {
      expect(sum(2,3))
      .toEqual(5);
    });
  });
