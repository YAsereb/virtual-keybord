//  key content

const KEY = {
  keyCode: [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']],

  rowKeysEng: [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ''],
    ['\t', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\n'],
    ['', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', '▲'],
    ['', '', '', ' ', '', '', '◄', '▼', '►']],
  rowKeysEngUp: [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''],
    ['\t', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '\n'],
    ['', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '', '▲'],
    ['', '', '', ' ', '', '', '◄', '▼', '►']],

  rowKeysRus: [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ''],
    ['\t', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
    ['', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\n'],
    ['', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', '▲'],
    ['', '', '', ' ', '', '', '◄', '▼', '►']],

  rowKeysRusUp: [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ''],
    ['\t', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
    ['', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\n'],
    ['', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '', '▲'],
    ['', '', '', ' ', '', '', '◄', '▼', '►']],
};

// create html
const BODY = document.querySelector('body');

// create container
const htmlContainer = '<div class=container></div>';

BODY.insertAdjacentHTML('afterbegin', htmlContainer);

const CONTAINER = document.querySelector('.container');

// create textarea
const TEXTAREA = document.createElement('textarea');
TEXTAREA.setAttribute('rows', 5);
TEXTAREA.setAttribute('cols', 50);
TEXTAREA.setAttribute('autofocus', 50);
TEXTAREA.setAttribute('id', 'textarea');

TEXTAREA.classList.add('textarea');

CONTAINER.prepend(TEXTAREA);

// create keyboard
const keyBoard = '<div class=keyboard-wrapper><div class=keyboard></div></div>';

CONTAINER.insertAdjacentHTML('beforeend', keyBoard);
const KEYBOARD = document.querySelector('.keyboard');

const changeLanguageHTML = '<div class=changeLanguage>Для смены языка зажмите Alt + CTRL</div>';

CONTAINER.insertAdjacentHTML('beforeend', changeLanguageHTML);

// create row keys

const rowKeys = '<div class=row></div>';
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);
KEYBOARD.insertAdjacentHTML('afterbegin', rowKeys);

// create keys//

const ROWS = document.querySelectorAll('.row');

const keys = '<div class=key><div class=rowKeysEng></div><div class=rowKeysEngUp></div><div class=rowKeysRus></div><div class=rowKeysRusUp></div></div>';

const insertKey = (arr, row) => {
  for (let i = 0; i < arr[row].length; i += 1) {
    ROWS[row].insertAdjacentHTML('beforeend', keys);
  }
};

insertKey(KEY.keyCode, 0);
insertKey(KEY.keyCode, 1);
insertKey(KEY.keyCode, 2);
insertKey(KEY.keyCode, 3);
insertKey(KEY.keyCode, 4);

// insert class and symbol to key

const insertClass = () => {
  for (let i = 0; i < ROWS.length; i += 1) {
    const keyCap = ROWS[i].querySelectorAll('.key');
    for (let j = 0; j < keyCap.length; j += 1) {
      keyCap[j].classList.add(`${KEY.keyCode[i][j]}`);
    }
  }
};
insertClass();

const insertKeyContent = () => {
  for (let i = 0; i < ROWS.length; i += 1) {
    const keyCapEng = ROWS[i].querySelectorAll('.rowKeysEng');
    const keyCapEngUp = ROWS[i].querySelectorAll('.rowKeysEngUp');
    const keyCapRus = ROWS[i].querySelectorAll('.rowKeysRus');
    const keyCapRusUp = ROWS[i].querySelectorAll('.rowKeysRusUp');

    for (let j = 0; j < keyCapEng.length; j += 1) {
      keyCapEng[j].textContent = `${KEY.rowKeysEng[i][j]}`;
    }
    for (let j = 0; j < keyCapEngUp.length; j += 1) {
      keyCapEngUp[j].textContent = `${KEY.rowKeysEngUp[i][j]}`;
    }
    for (let j = 0; j < keyCapRus.length; j += 1) {
      keyCapRus[j].textContent = `${KEY.rowKeysRus[i][j]}`;
    }
    for (let j = 0; j < keyCapRusUp.length; j += 1) {
      keyCapRusUp[j].textContent = `${KEY.rowKeysRusUp[i][j]}`;
    }
  }
};
insertKeyContent();

// start active key

const startActiveKey = document.querySelectorAll('.rowKeysEng');

const addActiveLanguage = () => {
  if (!localStorage.getItem('language')) {
    startActiveKey.forEach((elem) => {
      elem.classList.add('active');
    });
  } else if (localStorage.getItem('language') === 'Eng') {
    document.querySelectorAll('.rowKeysEng').forEach((elem) => {
      elem.classList.add('active');
    });
  } else {
    document.querySelectorAll('.rowKeysRus').forEach((elem) => {
      elem.classList.add('active');
    });
  }
};

addActiveLanguage();

// event key on keyboard

const TEXTAREA_ID = document.querySelector('#textarea');

const Backspace = document.querySelector('.Backspace');
const CapsLock = document.querySelector('.CapsLock');
const ShiftLeft = document.querySelector('.ShiftLeft');
const ShiftRight = document.querySelector('.ShiftRight');

const changeActiveKey = () => {
  const active = document.querySelector('.active');
  if (active.classList.contains('rowKeysEng')) {
    document.querySelectorAll('.rowKeysEng').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEngUp').forEach((element) => {
      element.classList.add('active');
    });
  } else if (active.classList.contains('rowKeysEngUp')) {
    document.querySelectorAll('.rowKeysEngUp').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEng').forEach((element) => {
      element.classList.add('active');
    });
  } else if (active.classList.contains('rowKeysRus')) {
    document.querySelectorAll('.rowKeysRus').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRusUp').forEach((element) => {
      element.classList.add('active');
    });
  } else if (active.classList.contains('rowKeysRusUp')) {
    document.querySelectorAll('.rowKeysRusUp').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRus').forEach((element) => {
      element.classList.add('active');
    });
  }
};

let language = '';

const changeLanguage = () => {
  const active = document.querySelector('.active');

  if (active.classList.contains('rowKeysEng')) {
    document.querySelectorAll('.rowKeysEng').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRus').forEach((element) => {
      element.classList.add('active');
    });
    language = 'Rus';
  }
  if (active.classList.contains('rowKeysRus')) {
    document.querySelectorAll('.rowKeysRus').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEng').forEach((element) => {
      element.classList.add('active');
    });
    language = 'Eng';
  }
  if (active.classList.contains('rowKeysRusUp')) {
    document.querySelectorAll('.rowKeysRusUp').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysEngUp').forEach((element) => {
      element.classList.add('active');
    });
    language = 'Eng';
  }
  if (active.classList.contains('rowKeysEngUp')) {
    document.querySelectorAll('.rowKeysEngUp').forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelectorAll('.rowKeysRusUp').forEach((element) => {
      element.classList.add('active');
    });
    language = 'Rus';
  }
  localStorage.setItem('language', `${language}`);
};

const allKey = document.querySelectorAll('.key');

allKey.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    if (event.target === CapsLock) {
      CapsLock.classList.toggle('active-key');
      changeActiveKey();
    } else if (event.target === Backspace) {
      let start = TEXTAREA_ID.selectionStart;

      TEXTAREA_ID.value = TEXTAREA_ID.value.slice(0, TEXTAREA_ID.selectionStart - 1)
                + TEXTAREA_ID.value.slice(TEXTAREA_ID.selectionEnd, TEXTAREA_ID.length);
      start -= 1;
      TEXTAREA_ID.selectionStart = TEXTAREA_ID.selectionEnd;
      TEXTAREA_ID.selectionEnd = start;
    } else {
      const keyContent = elem.querySelector('.active').textContent;
      let start = TEXTAREA_ID.selectionStart;
      const end = TEXTAREA_ID.selectionEnd;
      if (end === TEXTAREA_ID.value.length) {
        TEXTAREA_ID.value += keyContent;
      } else {
        TEXTAREA_ID.value = TEXTAREA_ID.value.slice(0, start) + keyContent
                    + TEXTAREA_ID.value.slice(end, TEXTAREA_ID.value.length);
        start += 1;
        TEXTAREA_ID.selectionStart = TEXTAREA_ID.selectionEnd;
        TEXTAREA_ID.selectionEnd = start;
      }
    }
  });
  elem.addEventListener('mousedown', (e) => {
    if (e.target !== CapsLock) {
      elem.classList.add('active-key');
    }
  });

  elem.addEventListener('mouseup', (e) => {
    if (e.target !== CapsLock) {
      elem.classList.remove('active-key');
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

let shift = false;
let caps = true;

document.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.${e.code}`);
  if (!key) {
    return;
  }
  key.classList.add('active-key');
  e.preventDefault();
  if (key === CapsLock) {
    changeActiveKey();
    caps = !caps;
    if (caps) {
      CapsLock.classList.add('active-key');
    }
  } else if (key === Backspace) {
    let start = TEXTAREA_ID.selectionStart;

    TEXTAREA_ID.value = TEXTAREA_ID.value.slice(0, TEXTAREA_ID.selectionStart - 1)
            + TEXTAREA_ID.value.slice(TEXTAREA_ID.selectionEnd, TEXTAREA_ID.length);
    start -= 1;
    TEXTAREA_ID.selectionStart = TEXTAREA_ID.selectionEnd;
    TEXTAREA_ID.selectionEnd = start;
  } else if (key === ShiftLeft || key === ShiftRight) {
    if (!shift) {
      changeActiveKey();
    }
    shift = true;
  } else if (e.ctrlKey && e.altKey) {
    changeLanguage();
  } else if (!e.ctrlKey && !e.altKey && !e.metaKey) {
    const keyContent = key.querySelector('.active').textContent;
    let start = TEXTAREA_ID.selectionStart;
    const end = TEXTAREA_ID.selectionEnd;

    if (end === TEXTAREA_ID.value.length) {
      TEXTAREA_ID.value += keyContent;
    } else {
      TEXTAREA_ID.value = TEXTAREA_ID.value.slice(0, start) + keyContent
                + TEXTAREA_ID.value.slice(end, TEXTAREA_ID.value.length);
      start += 1;
      TEXTAREA_ID.selectionStart = TEXTAREA_ID.selectionEnd;
      TEXTAREA_ID.selectionEnd = start;
    }
  }
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`.${e.code}`);
  if (!key) {
    return;
  }
  if (key !== CapsLock) {
    key.classList.remove('active-key');
  }
  if (key === CapsLock) {
    if (caps === true) {
      CapsLock.classList.remove('active-key');
    }
  }

  if (key === ShiftLeft || key === ShiftRight) {
    if (shift) {
      changeActiveKey();
    }
    shift = false;
  }
});
