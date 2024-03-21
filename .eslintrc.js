module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    trailingComma: 1, // 마지막 요소 뒤에 쉼표를 항상 추가
    arrowParens: 1, // 화살표 함수의 매개변수가 하나인 경우에도 괄호를 항상 추가
    singleQuote: 1, // 문자열을 항상 작은따옴표로 변경
    printWidth: 1, // 줄 바꿈을 할 때 줄 너비를 80으로 제한
    tabWidth: 1, // 탭의 너비를 2로 설정
    semi: 1, // 항상 세미콜론을 추가
    bracketSpacing: 1, // 객체 리터럴의 괄호 안에 공백을 추가
    jsxBracketSameLine: 1, // JSX의 꺽쇠 괄호를 여는 부분을 항상 새 줄에 추가
    jsxSingleQuote: 1, // JSX 속성 값을 항상 작은따옴표로 변경
    endOfLine: 1, // 줄 바꿈 문자를 자동으로 선택
  },
};