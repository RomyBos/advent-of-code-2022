import { readAocTextFile, splitByNewLine, splitStringbyCharacter, inRange } from "../../lib/src/utils";



const checkIfFullyContained = (elfToCheckRange: string[], otherElfRange: string[]) => {
  for (let i = Number(elfToCheckRange[0]); i < Number(elfToCheckRange[1])+1; i += 1) {
    if (!inRange(i, Number(otherElfRange[0]), Number(otherElfRange[1]))) {
      return false
    }
  }
  console.log(elfToCheckRange + " is fully contained in " + otherElfRange)
  return true
}

const checkIfOverlap = (elfToCheckRange: string[], otherElfRange: string[]) => {
  for (let i = Number(elfToCheckRange[0]); i < Number(elfToCheckRange[1])+1; i += 1) {
    if (inRange(i, Number(otherElfRange[0]), Number(otherElfRange[1]))) {
      console.log(elfToCheckRange + " overlaps with " + otherElfRange)
      return true
    }
  }
  return false
}

const p1 = (input: string[]) => {
  let amountOfFullyContained = 0
  const pairs = splitStringbyCharacter(input, ',').map((p => splitStringbyCharacter(p, '-')))
  console.log(pairs)

  pairs.forEach(function (pair) {
    if (checkIfFullyContained(pair[0], pair[1]) || checkIfFullyContained(pair[1], pair[0])) {
      amountOfFullyContained += 1
    }
  })

  return amountOfFullyContained
}

const p2 = (input: string[]) => {
  let amountOfOverlap = 0
  const pairs = splitStringbyCharacter(input, ',').map((p => splitStringbyCharacter(p, '-')))
  console.log(pairs)

  pairs.forEach(function (pair) {
    if (checkIfOverlap(pair[0], pair[1])) {
      amountOfOverlap += 1
    }
  })

  return amountOfOverlap
}

const taskData = splitByNewLine(readAocTextFile('data_p1.txt'))

//console.log("result: " + p1(taskData))

 console.log(p2(taskData))

