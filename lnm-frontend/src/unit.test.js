const { showError } = require('./unit.js');
const { SignUpForm, SignInForm } = require('./unit.js');


describe('showError', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="errorName"></div>
            <div id="errorPassword"></div>
        `;
    });

    test('install text error', () => {
        showError('This is an error', 'errorName');
        const errorDiv = document.getElementById('errorName');
        expect(errorDiv.textContent).toBe('This is an error');
    });

    test('Empty', () => {
        showError('', 'errorName');
        const errorDiv = document.getElementById('errorName');
        expect(errorDiv.textContent).toBe('');
    });
});

describe('SignUpForm', () => {
    beforeEach(() => {
        delete window.location;
        window.location = { assign: jest.fn() };
    });

    test('should navigate to sign-up page', () => {
        SignUpForm();
        expect(window.location.assign).toHaveBeenCalledWith(
            "http://localhost:50796/LogicNovelMystery-main/LogicNovelMystery-main/lnm-frontend/src/signUpForm.html"
        );
    });
});

<<<<<<< HEAD
=======

describe('SignInForm', () => {
    beforeEach(() => {
        delete window.location;
        window.location = { assign: jest.fn() };
    });

    test('should navigate to sign-in page', () => {
        SignInForm();
        expect(window.location.assign).toHaveBeenCalledWith(
            "http://localhost:50796/LogicNovelMystery-main/LogicNovelMystery-main/lnm-frontend/index.html"
        );
    });
});



>>>>>>> 6d1892f25e765b2b625581dc37df664bed85723e
