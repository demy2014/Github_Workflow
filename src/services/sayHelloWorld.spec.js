const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Germano', () => {
        const response = sayHelloWorld.sayHello('Oklaa Dev Teams');

        expect(response).toBe('Hello Oklaa Dev Teams!');
    })
});
