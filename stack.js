isValid = s => {
    let stck =[];
    for(i=0; i<s.length; i++) {
        let char = stck[stck.length-1]
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stck.push(s[i])
        } else if ((char == "(" && s[i] == ")") ||
        (char == "{" && s[i] == "}") ||
        (char == "[" && s[i] == "]")) {
            stck.pop()
        }else return false
        }
    //check empty stack
    return stck.length ? false : true

}
let a = isValid("())")
console.log("a:",a)