function solution(todo_list, finished) {
    const answer = [];
    
    todo_list.forEach((word, idx) => {
        if(finished[idx] === false) {
            answer.push(word);
        }
    })

    return answer;
}