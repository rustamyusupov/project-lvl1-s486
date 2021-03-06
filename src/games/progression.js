import getRandomInt from '../utils';
import gameEngine from '..';

const gameRule = 'What number is missing in the progression?';
const maxRandomNumber = 100;
const progressionLength = 10;

const getProgression = (firstElement, step) => [...new Array(progressionLength)].map(
  (_, index) => firstElement + index * step,
);

const quiz = () => {
  const firstElement = getRandomInt(0, maxRandomNumber);
  const step = getRandomInt(0, maxRandomNumber);
  const progression = getProgression(firstElement, step);
  const hiddenElementIndex = getRandomInt(0, progressionLength - 1);
  const result = progression[hiddenElementIndex];

  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');
  const answer = String(result);

  return [question, answer];
};

export default () => gameEngine(gameRule, quiz);
