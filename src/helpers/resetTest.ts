import { setTimerId, setWordList, timerSet } from '../store/actions';

import { store } from '../store/store';

export const resetTest = async () => {
  const { dispatch, getState } = store;

  const {
    time: { timerId },
    preferences: { timeLimit, type },
  } = getState();

  // clear the wrong and right classes from the word list
  document
    .querySelectorAll('.wrong, .right')
    .forEach((el) => el.classList.remove('wrong', 'right'));

  // reset the timer
  if (timerId) {
    clearInterval(timerId);
    dispatch(setTimerId(null));
  }

  // reset the word list
  import(`wordlists/${type}.json`).then((words) =>
    dispatch(setWordList(words.default))
  );

  dispatch(timerSet(timeLimit));
};
