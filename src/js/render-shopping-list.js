import {
  shopping_info,
  removeShoppingListBoock,
  saveShoppingList,
  addBook,
} from './shopping-list';
const plug = document.querySelector('.shop_plug');
const div_card_container = document.querySelector('.js-shop_card');
let number_of_books = Object.keys(shopping_info.shopping_list).length;

div_card_container.addEventListener('click', onClickDel);

markupBookCard(shopping_info.shopping_list);

function ofShoppingList() {
  if (number_of_books) {
    plug.style.display = 'none';
    return false;
  } else {
    plug.style.display = 'block';
    return true;
  }
}

function markupBookCard(data) {
  if (ofShoppingList()) return;
  let markup = '';
  div_card_container.innerHTML = markup;
  const keys = Object.keys(data);
  keys.forEach(key => {
    let {
      book_image,
      title,
      list_name,
      description,
      author,
      amazon,
      apple_books,
      bookshop,
    } = data[key];

    if (!book_image.trim())
      book_image = require('../images/shoppin-list/no_book.png');

    markup += `
      <div class="shop_card theme-switch light-theme dark-theme" id="${key}">
      <img src=${book_image} alt=${title} />
      <div class="shop_card-div_description">
        <div class="shop_card-div_title">
          <div>
            <h2 class="global-title shop_card-title theme-switch light-theme dark-theme">${title}</h2>
            <h3 class="global-title shop_card-category">
              ${list_name}
            </h3>
          </div>
          <button data-id=${key}></button>
        </div>
        <p class="global-p shop_card-description theme-switch light-theme dark-theme">
          ${description}
        </p>
        <div class="shop_card-empty_place"></div>
        <div class="shop_card-footer">
          <p class="global-p shop_card-author">${author}</p>
          <div class="shop_card-empty_place"></div>
          <a class="global-link shop_card-link" href=${amazon} target="_blank" rel="noopener noreferrer">
            <img class="shop_amazon--black theme-switch light-theme dark-theme"
              src=${require('../images/shoppin-list/icons/amazon_black.png')}
              alt="amazon"
            />
            <img class="shop_amazon--wite theme-switch light-theme dark-theme"
              src=${require('../images/shoppin-list/icons/amazon_wite.png')}
              alt="amazon"
            />
          </a>
          <a class="global-link shop_card-link" href=${apple_books} target="_blank" rel="noopener noreferrer">
            <img
              src= ${require('../images/shoppin-list/icons/book_1.png')}
              alt="books"
              />
           </a>
          <a class="global-link shop_card-link" href=${bookshop} target="_blank" rel="noopener noreferrer">
            <img
              src= ${require('../images/shoppin-list/icons/book_2.png')}
              alt="books"
            />
          </a>
        </div>
      </div>
    </div>
    `;
  });

  div_card_container.insertAdjacentHTML('beforeend', markup);
}

function onClickDel(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  removeShoppingListBoock(event.target.dataset.id);

  const cardDel = document.getElementById(`${event.target.dataset.id}`);
  cardDel.remove();
  if (!--number_of_books) {
    plug.style.display = 'block';
    localStorage.clear();
    shopping_info;
  }
}
