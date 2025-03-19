let john = { name: "dbb", surname: "Smith", id:
1 };
let pete = { name: "Pete", surname: "Hunt", id:
2 };
let mary = { name: "Mary", surname: "Key", id:
3 };
let users = [ john, pete, mary ];

// 새로운 객체 및 배열 생성
let fullNameJohn = {};
let fullNamePete = {};
let fullNameMary = {};
let fullNameUsers = [fullNameJohn, fullNamePete, fullNameMary];

// 속성 추가
for(let i = 0; i < fullNameUsers.length; i++){
    fullNameUsers[i].name = users[i].name + " " + users[i].surname;
    fullNameUsers[i].id = users[i].id;
}

// 출력
console.log(fullNameUsers);