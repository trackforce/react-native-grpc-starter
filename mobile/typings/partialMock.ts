type PartialMock<T> = {
    [P in keyof T]?: jest.Mock<any>;
};
