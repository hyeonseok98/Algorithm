function createScoreMap(names, yearnings) {
  const scoreMap = {};
  for (let i = 0; i < names.length; i++) {
    scoreMap[names[i]] = yearnings[i];
  }
  return scoreMap;
}

function calculatePhotoScore(photo, scoreMap) {
  return photo.reduce((sum, name) => sum + (scoreMap[name] || 0), 0);
}

function solution(name, yearning, photos) {
  const scoreMap = createScoreMap(name, yearning);
    
  return photos.map(photo => calculatePhotoScore(photo, scoreMap));
}