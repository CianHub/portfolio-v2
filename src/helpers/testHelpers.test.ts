import { afterTest, beforeTest } from './testHelpers';

describe('testHelpers', () => {
  it('should return a HTMLElement and call document.createElement and document.body.appendChild', () => {
    const elementSpy = jest.spyOn(document, 'createElement');
    const appendSpy = jest.spyOn(document.body, 'appendChild');

    beforeTest();

    expect(elementSpy).toHaveBeenCalled();
    expect(appendSpy).toHaveBeenCalled();
    expect(beforeTest()).toBeInstanceOf(HTMLElement);

    elementSpy.mockRestore();
    appendSpy.mockRestore();
  });

  it('should return null and call HTMLElement.remove', () => {
    const container = beforeTest();
    const removeSpy = jest.spyOn(container, 'remove');

    expect(afterTest(container)).toBeNull();
    expect(removeSpy).toHaveBeenCalled();

    removeSpy.mockRestore();
  });
});
