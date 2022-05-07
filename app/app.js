//key content

const KEY = {
  keyCode: [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']],

  rowKeysEng: [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ''],
  ['', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',],
  ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", ''],
  ['', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', ''],
  ['', '', '', ' ', '', '', '', '', '']],
  rowKeysEngUp: [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''],
  ['', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',],
  ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', ''],
  ['', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '', ''],
  ['', '', '', ' ', '', '', '', '', '']],

  rowKeysRus: [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ''],
  ['', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',],
  ['', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', ''],
  ['', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', ''],
  ['', '', '', ' ', '', '', '', '', '']],

  rowKeysRusUp: [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ''],
  ['', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',],
  ['', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', ''],
  ['', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '', ''],
  ['', '', '', ' ', '', '', '', '', '']],
}

//create html
const BODY = document.querySelector('body');

// create container
let htmlContainer = '<div class=container></div>';

BODY.insertAdjacentHTML('afterbegin', htmlContainer);

const CONTAINER = document.querySelector('.container')

// create textarea
const TEXTAREA = document.createElement('textarea');
TEXTAREA.setAttribute('rows', 5)
TEXTAREA.setAttribute('cols', 50);
TEXTAREA.setAttribute('autofocus', 50);
TEXTAREA.setAttribute('id', 'textarea');

TEXTAREA.classList.add('textarea');

CONTAINER.prepend(TEXTAREA);

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

const ROWS = document.querySelectorAll('.row');

let keys = '<div class=key><div class=rowKeysEng></div><div class=rowKeysEngUp></div><div class=rowKeysRus></div><div class=rowKeysRusUp></div></div>';

const insertKey = (arr, row) => {
  for (let i = 0; i < arr[row].length; i++) {
    ROWS[row].insertAdjacentHTML('beforeend', keys);
  }
};

insertKey(KEY.keyCode, 0);
insertKey(KEY.keyCode, 1);
insertKey(KEY.keyCode, 2);
insertKey(KEY.keyCode, 3);
insertKey(KEY.keyCode, 4);

//insert class and symbol to key

const insertClass = () => {
  for (let i = 0; i < ROWS.length; i++) {
    let keyCap = ROWS[i].querySelectorAll('.key');
    for (let j = 0; j < keyCap.length; j++) {
      keyCap[j].classList.add(`${KEY.keyCode[i][j]}`);
    }
  }
}
insertClass();

const insertKeyContent = () => {
  for (let i = 0; i < ROWS.length; i++) {
    let keyCapEng = ROWS[i].querySelectorAll('.rowKeysEng');
    let keyCapEngUp = ROWS[i].querySelectorAll('.rowKeysEngUp');
    let keyCapRus = ROWS[i].querySelectorAll('.rowKeysRus');
    let keyCapRusUp = ROWS[i].querySelectorAll('.rowKeysRusUp');

    for (let j = 0; j < keyCapEng.length; j++) {
      keyCapEng[j].textContent = `${KEY.rowKeysEng[i][j]}`;
    }
    for (let j = 0; j < keyCapEngUp.length; j++) {
      keyCapEngUp[j].textContent = `${KEY.rowKeysEngUp[i][j]}`;
    }
    for (let j = 0; j < keyCapRus.length; j++) {
      keyCapRus[j].textContent = `${KEY.rowKeysRus[i][j]}`;
    }
    for (let j = 0; j < keyCapRusUp.length; j++) {
      keyCapRusUp[j].textContent = `${KEY.rowKeysRusUp[i][j]}`;
    }
  }
}
insertKeyContent();

// start active key 
let startActiveKey = document.querySelectorAll('.rowKeysEng');
startActiveKey.forEach((elem) => {
  elem.classList.add('active')
});

// event key on keyboard

const TEXTAREA_ID = document.querySelector('#textarea');

const Tab = document.querySelector('.Tab');
const Backspace = document.querySelector('.Backspace');
const CapsLock = document.querySelector('.CapsLock');
const Enter = document.querySelector('.Enter');
const ShiftLeft = document.querySelector('.ShiftLeft');
const ShiftRight = document.querySelector('.ShiftRight');
const ArrowUp = document.querySelector('.ArrowUp');
const ControlLeft = document.querySelector('.ControlLeft');
const Space = document.querySelector('.Space');
const ControlRight = document.querySelector('.ControlRight');
const ArrowDown = document.querySelector('.ArrowDown');
const ArrowLeft = document.querySelector('.ArrowLeft');
const ArrowRight = document.querySelector('.ArrowRight');


const changeActiveKey = () => {
  let active = document.querySelector('.active');
  if (active.classList.contains('rowKeysEng')) {
    document.querySelectorAll('.rowKeysEng').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEngUp').forEach(element => {
      element.classList.add('active')
    });
  } else if (active.classList.contains('rowKeysEngUp')) {
    document.querySelectorAll('.rowKeysEngUp').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEng').forEach(element => {
      element.classList.add('active');
    });
  } else if (active.classList.contains('rowKeysRus')) {
    document.querySelectorAll('.rowKeysRus').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRusUp').forEach(element => {
      element.classList.add('active');
    });
  } else if (active.classList.contains('rowKeysRusUp')) {
    document.querySelectorAll('.rowKeysRusUp').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRus').forEach(element => {
      element.classList.add('active');
    });
  }
}

const changeLanguage = () => {
  let active = document.querySelector('.active');
  if (active.classList.contains('rowKeysEng')) {
    document.querySelectorAll('.rowKeysEng').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRus').forEach(element => {
      element.classList.add('active')
    });
  }
  if (active.classList.contains('rowKeysRus')) {
    document.querySelectorAll('.rowKeysRus').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEng').forEach(element => {
      element.classList.add('active')
    });
  }
  if (active.classList.contains('rowKeysRusUp')) {
    document.querySelectorAll('.rowKeysRusUp').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEngUp').forEach(element => {
      element.classList.add('active')
    });
  }
  if (active.classList.contains('rowKeysEngUp')) {
    document.querySelectorAll('.rowKeysEngUp').forEach(element => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRusUp').forEach(element => {
      element.classList.add('active')
    });
  }
}
const allKey = document.querySelectorAll('.key');
allKey.forEach((elem) => {

  elem.addEventListener('click', (event) => {
    if (event.target === CapsLock) {
      changeActiveKey();
    } else if (event.target === Backspace) {
      TEXTAREA_ID.value = TEXTAREA_ID.value.slice(0, TEXTAREA_ID.value.length - 1)
    } else if (event.target === Enter) {
      TEXTAREA_ID.value += '\n';
    } else if (event.target === Tab) {
      TEXTAREA_ID.value += '    ';
    } else if (event.target === Space) {
      TEXTAREA_ID.value += ' ';
    } else if (event.target === ArrowUp) {
      TEXTAREA_ID.value += '▲';
    } else if (event.target === ArrowLeft) {
      TEXTAREA_ID.value += '◄';
    } else if (event.target === ArrowDown) {
      TEXTAREA_ID.value += '▼';
    } else if (event.target === ArrowRight) {
      TEXTAREA_ID.value += '►';
    } else {
      let keyContent = elem.querySelector('.active');
      TEXTAREA_ID.value += keyContent.textContent;
    }

  });
  elem.addEventListener('mousedown', (event) => {
    if (event.target === ShiftLeft || event.target === ShiftRight) {
      changeActiveKey();
    }
  });
  elem.addEventListener('mouseup', (event) => {
    if (event.target === ShiftLeft || event.target === ShiftRight) {
      changeActiveKey();
    }
  });
});

document.addEventListener('keydown', (e) => {
  let key = document.querySelector(`.${e.code}`);
  key.classList.add('active-key');


  e.preventDefault();
  if (key === CapsLock) {
    changeActiveKey();
  } else if (key === Backspace) {
    TEXTAREA_ID.value = TEXTAREA_ID.value.slice(0, TEXTAREA_ID.value.length - 1)
  } else if (key === Enter) {
    TEXTAREA_ID.value += '\n';
  } else if (key === Tab) {
    TEXTAREA_ID.value += '    ';
  } else if (key === Space) {
    TEXTAREA_ID.value += ' ';
  } else if (key === ArrowUp) {
    TEXTAREA_ID.value += '▲';
  } else if (key === ArrowLeft) {
    TEXTAREA_ID.value += '◄';
  } else if (key === ArrowDown) {
    TEXTAREA_ID.value += '▼';
  } else if (key === ArrowRight) {
    TEXTAREA_ID.value += '►';
  } else if (key === ShiftLeft || key === ShiftRight) {
    changeActiveKey();
  } else if (e.shiftKey && (key === ControlLeft || key === ControlRight)) {
    changeLanguage();
  } else {
    if (!e.ctrlKey && !e.altKey && !e.metaKey) {
      let keyContent = e.key;
      TEXTAREA_ID.value += keyContent;
    }
  }
});

document.addEventListener('keyup', (e) => {
  let key = document.querySelector(`.${e.code}`);
  key.classList.remove('active-key')
  if (key === ShiftLeft || key === ShiftRight) {
    changeActiveKey();
  }
});







































