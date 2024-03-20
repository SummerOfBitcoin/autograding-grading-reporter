const getMaxScoreForTest = (runnerResult) => runnerResult.max_score || 0

const getTotalMaxScore = (runnerResults) => {
  return runnerResults.reduce((acc, {results}) => acc + results.max_score, 0)
}

const totalPercentageReducer = (acc, {score, weight, maxScore}) => {
  return acc + ((score || 0) / (maxScore || 1)) * weight
}

const getTestScore = (runnerResult) => {
  return runnerResult.tests.reduce((acc, {status, score}) => {
    if (score === 'pass') return acc + score
    else if (score !== undefined && score > 0) return acc + score
    else return acc
  }, 0)
}

const getTestWeight = (maxScore, allMaxScores) => {
  if (maxScore === 0) {
    return (0).toFixed(1)
  }
  const weight = allMaxScores !== 0 ? (maxScore / allMaxScores) * 100 : 0

  return Math.round(weight).toFixed(2)
}

exports.getMaxScoreForTest = getMaxScoreForTest
exports.getTotalMaxScore = getTotalMaxScore
exports.totalPercentageReducer = totalPercentageReducer
exports.getTestScore = getTestScore
exports.getTestWeight = getTestWeight
