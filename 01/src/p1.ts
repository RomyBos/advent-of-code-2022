import { readAocTextFile } from "../../lib/src/utils";

interface ElfValue {
    elfIndex: number
    totalCalories: number
} 

const p1 = (input: string[][], returnAmount: number) => {
  const inputData = input.map(stringArray => stringArray.map(str => {
    return Number(str)
  }))
  const elfValues: ElfValue[] = []
  let elfIndex = 0
  console.log(inputData)
  inputData.forEach(function (elf) {
    elfIndex = elfIndex+1
    const totalCalories = elf.reduce((sum, current) => sum + current.valueOf(), 0)
    elfValues.push({elfIndex, totalCalories})
  })

  elfValues.sort((a, b) => a.totalCalories < b.totalCalories ? -1 : a.totalCalories > b.totalCalories ? 1 : 0)
  
  const topThree = elfValues.slice(Math.max(elfValues.length - returnAmount, 0))

  return topThree.reduce((sum, current) => sum + current.totalCalories.valueOf(), 0)
}


const taskData = readAocTextFile('data_p1.txt')
console.log(p1(taskData, 3))

