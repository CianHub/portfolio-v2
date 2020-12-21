export class IntersectionObserverStub {
  get root() {
    return true;
  }
  takeRecords() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
jest.doMock('intersection-observer-mock', () => IntersectionObserverStub, {
  virtual: true,
});
