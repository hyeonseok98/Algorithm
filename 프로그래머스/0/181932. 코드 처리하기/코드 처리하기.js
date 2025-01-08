function solution(code) {
    let mode = 0;
    let answer = "";

    for (let i = 0; i < code.length; i++) {
        mode = toggleMode(mode, code[i]);

        if (code[i] !== "1" && checkMode(mode, i)) {
            answer += code[i];
        }
    }

    return answer === "" ? "EMPTY" : answer;
}

function toggleMode(mode, char) {
    return char === "1" ? 1 - mode : mode;
}

function checkMode(mode, idx) {
    return (mode === 0 && idx % 2 === 0) || (mode === 1 && idx % 2 === 1);
}