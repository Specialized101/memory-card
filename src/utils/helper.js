

const range =  (length) =>  {
  const arr = [...Array(length).keys()].map(x => x + 1)
  return arr
}

const shuffleArray = (array) => {
  const shuffledArr = [...array]
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffledArr[i]
    shuffledArr[i] = shuffledArr[j]
    shuffledArr[j] = temp
  }
  return shuffledArr
}

export { range, shuffleArray }
