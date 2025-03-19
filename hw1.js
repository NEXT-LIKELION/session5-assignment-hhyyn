const GRADE = ['A', 'B', 'C']

// 사용자 등급 입력 받기
let userInput = prompt("회원 등급을 A, B, C로 입력하세요.", '');
while (!GRADE.includes(userInput)) {
    userInput = prompt("잘못된 입력입니다. A, B, C 중 하나를 입력하세요.");
}

// 접근 가능한 영화 등급 push
let accessibleMovies = []
switch(userInput) {
    case 'A':
        accessibleMovies.push('A')
    case 'B':
        accessibleMovies.push('B')
    case 'C':
        accessibleMovies.push('C')
}

// 결과 출력
console.log(`회원님이 접근 가능한 영화는 ${accessibleMovies.join(", ")}등급입니다.`);