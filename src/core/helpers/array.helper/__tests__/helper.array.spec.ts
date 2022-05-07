import { Arr } from '..'

describe('testing helpers > array', () => {
  const testingArray = [
    { firstName: 'john', lastName: 'doe', age: 1000 },
    { firstName: 'alex', lastName: 'white', age: 20 },
  ]

  it('should sort an array of objects [ASC]', () => {
    const sortedArray = Arr.sortArrOfObj(testingArray, 'age', 'ASC')
    expect(sortedArray[0].age).toEqual(20)
  })

  it('should sort an array of objects [DESC]', () => {
    const sortedArray = Arr.sortArrOfObj(testingArray, 'age', 'DESC')
    expect(sortedArray[0].age).toEqual(1000)
  })

  it('should paginate an array of any', () => {
    const paginatedArray = Arr.paginate(testingArray, 1, 1)
    expect(paginatedArray.length).toEqual(1)
  })
})
