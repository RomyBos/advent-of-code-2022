import { readAocTextFile, splitArrayByNewLine, splitArrayBySpace, splitByEmptyLine, splitByNewLine } from "../../lib/src/utils";

enum ShapeValue {
  A = 'Rock',
  B = 'Paper',
  C = 'Scissors',
  X = 'Rock',
  Y = 'Paper',
  Z = 'Scissors'

}

enum ShapeScores {
  A = 1,
  B = 2,
  C = 3,
  X = 'Lose',
  Y = 'Draw',
  Z = 'Win'
}

enum OutcomeScore {
  Lose = 0,
  Draw = 3,
  Win = 6
}


const p1 = (input: string[][]) => {
  let ourScore: number = 0
  let elfScore: number = 0

  input.forEach(function (round) {
    const elfHand = round[0]
    const ourHand = round[1]

    console.log(getOutcome(ourHand, elfHand))
    
    ourScore = ourScore + ShapeScores[ourHand] + getOutcome(ourHand, elfHand)
    elfScore = elfScore + ShapeScores[elfHand] + getOutcome(elfHand, ourHand)

    console.log('our score = ' + ourScore)
    console.log('elf score = ' + elfScore)
  })
  return ourScore
}

const p2 = (input: string[][]) => {
  let ourScore: number = 0
  let elfScore: number = 0

  input.forEach(function (round) {
    const elfHand = round[0]
    const intendedOutcome = ShapeScores[round[1]]

    console.log(getCorrectMove(elfHand, intendedOutcome))
    const ourHand = getCorrectMove(elfHand, intendedOutcome)
    console.log(ourHand)
    
    ourScore = ourScore + ShapeScores[ourHand] + getOutcome(ourHand, elfHand)
    elfScore = elfScore + ShapeScores[elfHand] + getOutcome(elfHand, ourHand)

    console.log('our score = ' + ourScore)
    console.log('elf score = ' + elfScore)
  })
  return ourScore
}

const getOutcome = (ourGo: string, opponentGo: string) => {
  console.log (ourGo, opponentGo)
  if (ShapeValue[ourGo] === ShapeValue[opponentGo] ) {
    return OutcomeScore.Draw
  } else if (ShapeValue[ourGo] === 'Rock' && ShapeValue[opponentGo] === 'Paper') {
    return OutcomeScore.Lose
  } else if (ShapeValue[ourGo] === 'Rock' && ShapeValue[opponentGo] === 'Scissors') {
    return OutcomeScore.Win
  } else if (ShapeValue[ourGo] === 'Paper' && ShapeValue[opponentGo] === 'Rock') {
    return OutcomeScore.Win
  } else if (ShapeValue[ourGo] === 'Paper' && ShapeValue[opponentGo] === 'Scissors') {
    return OutcomeScore.Lose
  } else if (ShapeValue[ourGo] === 'Scissors' && ShapeValue[opponentGo] === 'Rock') {
    return OutcomeScore.Lose
  } else if (ShapeValue[ourGo] === 'Scissors' && ShapeValue[opponentGo] === 'Paper') {
    return OutcomeScore.Win
  } else {
    throw new Error('no outcome')
  }
}

const getCorrectMove = (opponentGo: string, intendedOutcome: string) => {
  console.log(opponentGo, intendedOutcome)
  switch (intendedOutcome) {
    case 'Draw':
      return opponentGo
    case 'Win':
      switch (ShapeValue[opponentGo]) {
        case 'Rock': 
          return 'B'
        case 'Paper':
          return 'C'
        case 'Scissors':
          return 'A'
      }
    case 'Lose':
      switch (ShapeValue[opponentGo]) {
        case 'Rock': 
          return 'C'
        case 'Paper':
          return 'A'
        case 'Scissors':
          return 'B'
      }
  }
  throw new Error('no move outcome')
}


const taskData = splitArrayBySpace(splitByNewLine(readAocTextFile('data_p1.txt')))
// console.log(p1(taskData))

console.log(p2(taskData))

