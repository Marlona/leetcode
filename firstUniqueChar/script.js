var firstUniqChar = function(s) {

let map = {};
for(let i = 0; i < s.length; i++) {
    if(map[s[i]] == undefined) {
        map[s[i]] == true;// should add +1 to new i;
    } else {
        map[s[i]] == false;// should add +1 to exisiting i;
    }
}
console.log(map);

for(let i = 0; i < s.length; i++) {
    if(map[s[i]] == true) {
        return i;
    }
}

return -1;
};
console.log(firstUniqChar('leetcode'));
