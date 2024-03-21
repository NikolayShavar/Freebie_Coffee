const pageButtons = document.querySelectorAll('.giftset-page');
const giftsetItems = document.querySelectorAll('.giftset-box__item');

pageButtons.forEach(button => {
  button.addEventListener('click', () => {
    pageButtons.forEach(btn => btn.classList.remove('select'));
    button.classList.add('select');

    const targetValue = button.dataset.target;

    giftsetItems.forEach(item => {
      if (item.classList.contains(`giftset-box__item${targetValue}`)) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  });
});