import { readAocTextFile, splitArrayByNewLine, splitArrayBySpace, splitByEmptyLine, splitByNewLine, splitStringInHalf } from "../../lib/src/utils";

enum Priority {
  a = 1,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y, 
  Z
}

const getLetterInBothCompartments = (compartments: string[]): string => {
  let letterInBothCompartments: string
  const compartment1 = compartments[0].split("")
  const compartment2 = compartments[1].split("")
  compartment1.forEach(function (letter) { 
    if (compartment2.includes(letter)) {
      letterInBothCompartments = letter
    }
  })
  return letterInBothCompartments
}

const getLetterForBadge = (elvesGroup: string[]): string => {
  let letterForBadge: string
  elvesGroup[0].split("").forEach(function (letter) {
    if (elvesGroup[1].includes(letter) && elvesGroup[2].includes(letter)) {
      console.log(letter)
      letterForBadge = letter
    }
  })
  return letterForBadge
}

const p1 = (input: string[]) => {
  const compartments = splitStringInHalf(input)
  let totalPriority: number = 0
  compartments.forEach(function (backpack) {
    const letterInBothCompartments = getLetterInBothCompartments(backpack)
      totalPriority = totalPriority + Priority[letterInBothCompartments]
  })
  return totalPriority
}

const p2 = (input: string[]) => {
  let totalPriority: number = 0

  for (let i = 0; i < input.length; i += 3) {
      const elvesGroup = input.slice(i, i+3)

      const letterForBadge = getLetterForBadge(elvesGroup)

      totalPriority = totalPriority + Priority[letterForBadge]
  }
  return totalPriority
}



const taskData = splitByNewLine(readAocTextFile('data_p1.txt'))

//console.log(p1(taskData))

 console.log(p2(taskData))

