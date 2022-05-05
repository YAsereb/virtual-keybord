//keycode

const keyCode = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']];

// let a = [];
// window.addEventListener('keydown', (elem) => {
//   console.log(elem.code);
//   a.push(elem.code)
// });

//create html
const BODY = document.querySelector('body');

// create container
let htmlContainer = '<div class=container></div>';

BODY.insertAdjacentHTML('afterbegin', htmlContainer);

const CONTAINER = document.querySelector('.container')

//create textarea
// const TEXTAREA = document.createElement('textarea');
// TEXTAREA.setAttribute('rows', 5)
// TEXTAREA.setAttribute('cols', 50);
// TEXTAREA.classList.add('textarea');

// CONTAINER.prepend(TEXTAREA);

// create keyboard
let keyBoard = '<div class=keyboard-wrapper><div class=keyboard></div></div>';

CONTAINER.insertAdjacentHTML('beforeend', keyBoard)
const KEYBOARD = document.querySelector('.keyboard')

// create row keys

let rowKeys = '<div class=row></div>';
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);

//create keys//

let rowKeysEng = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift'],
['Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', '', '', '']];

let rowKeysEngUp = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete'],
['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '', 'Shift'],
['Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', '', '', '']];

let rowKeysRus = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'],
['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', 'Shift'],
['Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', '', '', '']];

let rowKeysRusUp = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete'],
['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '', 'Shift'],
['Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', '', '', '']];

const ROWS = document.querySelectorAll('.row');

let keys = '<div class=key><span class=rowKeysEng></span><span class=rowKeysEngUp></span><span class=rowKeysRus></span><span class=rowKeysRusUp></span></div>';

const insertKey = (arr, row) => {
  for (let i = 0; i < arr[row].length; i++) {
    ROWS[row].insertAdjacentHTML('beforeend', keys);
  }
};

insertKey(rowKeysEng, 0);
insertKey(rowKeysEng, 1);
insertKey(rowKeysEng, 2);
insertKey(rowKeysEng, 3);
insertKey(rowKeysEng, 4);

//insert class and symbol to key
const insertContentKey = () => {
  for (let i = 0; i < ROWS.length; i++) {

    let rowKeys = ROWS[i].querySelectorAll('.key');
    for (let j = 0; j < rowKeys.length; j++) {
      rowKeys[j].classList.add(`${keyCode[i][j]}`)
    }
  }
};
insertContentKey();


























