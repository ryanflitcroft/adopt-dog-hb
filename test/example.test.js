// IMPORT MODULES under test here:
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('the function renderDogCard(dog) should take in an argument of an object and return a DOM elements a (href="dog.id")> p (text content dog.name) > img (src="./assets/${dog.breed}.jpeg") ', (expect) => {

    const dog = {
        name: 'Millie',
        breed: 'Aussie',
        id: 1
    };

    const expected = '<a href="./detail/?id=1"><div class="dog-card"><p>Millie</p><img src="./assets/Aussie.jpeg"></div></a>';
    
    const actual = renderDogCard(dog);

    expect.equal(actual.outerHTML, expected, 'this test proves the outer html of actual returns <a href="./detail/?id=1"><div class="dog-card"><p>Millie</p><img src="./assets/Aussie.jpeg"></div></a>');
});

test('the function renderDogDetail(dog) takes in an object as an argument and returns a DOM node', (expect) => {

    const dog = {
        name: 'Millie',
        breed: 'Aussie',
        id: 1,
        description: 'cute',
        age: 6
    };



    const expected = '<div class="dog-detail"><p class="name">Millie</p><img src="../assets/Aussie.jpeg"><div class="age-and-breed"><p class="age">6 years old</p><p class="breed">Aussie</p></div><p class="description">cute</p></div>';
    
    const actual = renderDogDetail(dog);

    expect.equal(actual.outerHTML, expected, 'this test proves the function returns the correct DOM node');
});

