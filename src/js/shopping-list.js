export const shopping_info = JSON.parse(
  localStorage.getItem('client-info')
) || {
  theme: 'light',
  shopping_list: {},
};

export function saveShoppingList(listBooks) {
  console.log('user', userEmail);
  const number_of_books = Object.keys(listBooks.shopping_list).length;
  shoppingListEl.innerHTML = number_of_books ? number_of_books : '';
  localStorage.setItem('number_of_books', JSON.stringify(number_of_books));
  console.log('number of books ', number_of_books);
  localStorage.setItem(userEmail, JSON.stringify(listBooks));
}

export function removeShoppingListBoock(idBoock) {
  console.log(shopping_info);
  for (const key in shopping_info.shopping_list) {
    if (key === idBoock) delete shopping_info.shopping_list[key];
  }

  saveShoppingList(shopping_info);
}

// додаємо в localStorage
export function addBook(key_new, book) {
  shopping_info.shopping_list[key_new] = book;
  saveShoppingList(shopping_info);
}
