const TREE_ROW = 5;

for (let i = 0; i < TREE_ROW; i++){
    // 배열 초기화
    let star = [];

    // 공백 push
    for (let j = TREE_ROW-i-1; j > 0; j--){
        star.push(" ");
    }

    // 별 push
    for (let j = 0; j < 2*i+1; j++)
        star.push("*");

    // 결과 출력
    console.log(star.join(""));
}