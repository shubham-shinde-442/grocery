export default {
    testEnvironment: 'jest-environment-jsdom', // Use jsdom for DOM testing
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
        '\\.(png|jpg|jpeg|gif|svg|avif)$': '<rootDir>/__mock__/fileMock.js', // Mock image imports
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Use setupFilesAfterEnv for jest-dom
};