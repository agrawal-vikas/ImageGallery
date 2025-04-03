const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
beforeEach(() => {
    console.error = jest.fn();
    console.warn = jest.fn();
});
afterEach(() => {
    console.error = originalConsoleError;
    console.warn = originalConsoleWarn;
});