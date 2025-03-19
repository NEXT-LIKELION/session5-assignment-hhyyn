const CHOICE = ["가위", "바위", "보"];
const MESSAGES = ["이겼습니다.", "비겼습니다.", "졌습니다."];

// 사용자 선택
let userChoice = prompt("가위, 바위, 보 중 하나를 입력하세요.");
while (!CHOICE.includes(userChoice)) {
    userChoice = prompt("잘못된 입력입니다. 가위, 바위, 보 중 하나를 입력하세요.");
}

// 컴퓨터 선택
let comChoice = CHOICE[Math.floor(Math.random() * 3)];

// 결과 계산
const resultList = {
    // 사용자: 컴퓨터
    // 사용자가 0 = 이김, 1 = 비김, 2 = 짐
    '가위': { '가위': 1, '바위': 2, '보': 0 },
    '바위': { '가위': 0, '바위': 1, '보': 2 },
    '보':   { '가위': 2, '바위': 0, '보': 1 }
}
const result = resultList[userChoice][comChoice];

// 결과 출력
console.log(`나: ${userChoice}, 컴퓨터: ${comChoice}`);
console.log(MESSAGES[result]);