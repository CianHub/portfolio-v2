export class IntersectionObserverStub {
  get root(): boolean {
    return true;
  }
  takeRecords(): void {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}
jest.doMock('intersection-observer-mock', () => IntersectionObserverStub, {
  virtual: true,
});
