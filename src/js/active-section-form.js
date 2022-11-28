const form = document.querySelector('#form');
const formPartOne = form.querySelector('#form-part-1');
const formPartTwo = form.querySelector('#form-part-2');

const activePrevSection = (evt) => {
    evt.preventDefault();

    formPartTwo.classList.remove('form__part-on');
    formPartTwo.classList.add('form__part-off');
    formPartOne.classList.remove('form__part-off');
    formPartOne.classList.add('form__part-on');
}

const activeNextSection = (evt) => {
    evt.preventDefault();

    formPartOne.classList.remove('form__part-on');
    formPartOne.classList.add('form__part-off');
    formPartTwo.classList.remove('form__part-off');
    formPartTwo.classList.add('form__part-on');
}

export { activePrevSection, activeNextSection }