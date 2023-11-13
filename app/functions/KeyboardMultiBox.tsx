import { Dispatch, SetStateAction } from 'react';

export const MultipleInputBox = (
  key: string,
  inputValue: string[],
  inputFieldRef: React.RefObject<HTMLInputElement | null>,
  setActiveKeyboard: Dispatch<SetStateAction<string>>
): string[] => {
  const updatedValue = [...inputValue]; // Create a copy of inputValue to avoid mutating state directly

  const inputIndex = inputFieldRef.current
    ? parseInt(inputFieldRef.current.dataset.index || '', 10)
    : undefined;

  if (inputIndex === undefined) {
    return updatedValue;
  }

  if (key === 'CLEAR') {
    updatedValue.fill('');
  } else if (key === '?123') {
    setActiveKeyboard((prevKeyboard) =>
      prevKeyboard === 'alpha' ? 'symbol' : 'alpha'
    );
  } else if (key === 'ABC') {
    setActiveKeyboard((prevKeyboard) =>
      prevKeyboard === 'alpha' ? 'symbol' : 'alpha'
    );
  } else if (key === '~') {
    const cursorPosition = inputFieldRef.current?.selectionStart || 0;
    if (cursorPosition > 0) {
      updatedValue[inputIndex] =
        updatedValue[inputIndex].slice(0, cursorPosition - 1) +
        updatedValue[inputIndex].slice(cursorPosition);
      setCursorPosition(inputFieldRef, cursorPosition - 1);
    }
  } else if (key === 'SPACEBAR') {
    const cursorPosition = inputFieldRef.current?.selectionStart || 0;
    updatedValue[inputIndex] =
      updatedValue[inputIndex].slice(0, cursorPosition) +
      ' ' +
      updatedValue[inputIndex].slice(cursorPosition);
    setCursorPosition(inputFieldRef, cursorPosition + 1);
  } else {
    const cursorPosition = inputFieldRef.current?.selectionStart || 0;
    updatedValue[inputIndex] =
      updatedValue[inputIndex].slice(0, cursorPosition) +
      key +
      updatedValue[inputIndex].slice(cursorPosition);
    setCursorPosition(inputFieldRef, cursorPosition + 1);
  }
  return updatedValue;
};

export const setCursorPosition = (inputFieldRef: React.RefObject<HTMLInputElement | null>, position: number): void => {
  if (inputFieldRef.current) {
    setTimeout(() => {
      if (inputFieldRef.current) {
        inputFieldRef.current.selectionStart = position;
        inputFieldRef.current.selectionEnd = position;
        inputFieldRef.current.focus();
      }
    }, 0);
  }
};