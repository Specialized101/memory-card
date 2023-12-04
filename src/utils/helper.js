

const generateRandomIds =  (length) =>  {
  const ids = new Set()

  while (ids.size < length) {
    const randomNumber = Math.floor(Math.random() * 151) + 1

    if (!ids.has(randomNumber)) {
      ids.add(randomNumber)
    }
  }
  return ids
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

export { generateRandomIds, shuffleArray }
