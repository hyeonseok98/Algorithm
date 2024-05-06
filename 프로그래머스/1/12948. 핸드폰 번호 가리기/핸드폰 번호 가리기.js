function solution(phone_number) {
    let phone_number_reverse = phone_number.split("").reverse()
    for(let i = 4; i < phone_number.length; i++) {
        phone_number_reverse[i] = '*'
    }
    let answer = phone_number_reverse.reverse().join("")
    return answer
}