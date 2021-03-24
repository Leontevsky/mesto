enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });

const allInputsEmpty = (inputList) => {
  //Если true - все поля пустые
  return !inputList.some(inputElement => inputElement.value.length > 0)
}

const hasInvalidInput = (inputList) => {
 return inputList.some(inputElement => !inputElement.validity.valid)
}

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
  if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

// функция showInputError красит поле красным и выводит ошибку
const showInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.add(inputErrorClass)
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass)
}

// функция hideInputError убирает красное поле и снимает ошибку
const hideInputError = (formElement, inputElement,{inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove(inputErrorClass)
  errorElement.classList.remove(errorClass)
}

// функция checkInput проверяет валидность поля
const checkInput = (formElement, inputElement, rest) => {
  if (inputElement.validity.valid) {hideInputError(formElement, inputElement, rest)} 
  else {showInputError(formElement, inputElement, rest)}
}

// функция setInputListeners навешивает обработчики на все поля формы
const setInputListeners = (formElement, {inputSelector,  submitButtonSelector, ...rest }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)) // ищем все input
  const buttonElement = formElement.querySelector(submitButtonSelector) // ищем кнопку 
  inputList.forEach(
    inputElement => {
    inputElement.addEventListener('input', () => {
      checkInput(formElement, inputElement, rest) // Проверить сотояние поля. Валидно ли оно?
      toggleButtonState(inputList, buttonElement, rest) // Переключить состояние кнопки
    })
    toggleButtonState(inputList, buttonElement, rest)
    } 
  )
}

const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector)) //нашли все формы  из конфигураций
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (event) { 
      event.preventDefault(); // запрещаем отправку данных на сервер через .preventDefault
    })
    setInputListeners(formElement, rest) //Навесить слушатели для полей формы
  })
}