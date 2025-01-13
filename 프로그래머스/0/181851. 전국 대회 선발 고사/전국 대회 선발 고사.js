function solution(rank, attendance) {
  const eligibleStudents = rank
    .map((rankValue, index) => ({ rank: rankValue, index }))
    .filter((student) => attendance[student.index])
    .sort((a, b) => a.rank - b.rank);

  const [a, b, c] = eligibleStudents.slice(0, 3).map((student) => student.index);
  return 10000 * a + 100 * b + c;
}