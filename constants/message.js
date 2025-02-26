// eslint-disable-next-line import/prefer-default-export
export const ERROR_SYMBOL = '[ERROR]';

export const ERROR_MESSAGE = {
  requireNumber: `${ERROR_SYMBOL} 숫자만 입력해 주세요.`,
  unknown: `${ERROR_SYMBOL} 알 수 없는 에러입니다.`,
  outOfRange: `${ERROR_SYMBOL} 1 ~ 45의 수만 입력가능합니다.`,
  tooManyNums: `${ERROR_SYMBOL} 로또 번호는 6개여야 합니다.`,
  duplication: `${ERROR_SYMBOL} 로또 번호는 중복이 있으면 안 됩니다.`,
  unexpectedMoney: `${ERROR_SYMBOL} 1000원 단위로 입력해야 합니다.`,
};

export const MESSAGE = {
  requireMoney: '구입금액을 입력해 주세요.',
  requireWinningNumbers: '당첨 번호를 입력해 주세요.',
  requireBonusNumber: '보너스 번호를 입력해 주세요.',
  statistic: '당첨 통계',
  line: '---',
};
