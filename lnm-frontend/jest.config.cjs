module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/?(*.)+(test).js'],
<<<<<<< HEAD

    // Собираем покрытие тестами
    collectCoverage: true,

    // Отчеты о покрытии кода
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],

    // Указываем, какие файлы учитывать при сборе покрытия
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
=======
>>>>>>> 6d1892f25e765b2b625581dc37df664bed85723e
};

