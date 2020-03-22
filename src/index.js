module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let Arr = str.split("");
    let Bracket = 0;

    while(Bracket < Arr.length){
        stack.push(Arr[Bracket]);
        for (let i = 0; i < bracketsConfig.length; i++){
            if (stack[stack.length-2] == bracketsConfig[i][0] && stack[stack.length-1] == bracketsConfig[i][1]){
                stack.pop();
                stack.pop();
            }
        }
        Bracket++;
    }
    return stack.length ? false : true;
}
