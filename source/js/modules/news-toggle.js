const buttonsList = document.querySelector('.news__filter-list');
const buttons = document.querySelectorAll('.news__filter-btn');

const changeActiveButton = (evt) => {
  const choosenButton = evt.target.closest('.news__filter-btn');
  if (choosenButton.classList.contains('news__filter-btn--active')) {
    return;
  }
  buttons.forEach((button) => button.classList.remove('news__filter-btn--active'));
  choosenButton.classList.add('news__filter-btn--active');
};

const setActiveButton = () => {
  buttonsList.addEventListener(('click'), changeActiveButton);
};

export {setActiveButton};
