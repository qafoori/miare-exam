export class Arr {
  static sortArrOfObj(arr: any[], by: string, type: 'ASC' | 'DESC' = 'ASC') {
    const sorted = arr.sort((a, b) => (a[by] > b[by] ? 1 : b[by] > a[by] ? -1 : 0))
    return type === 'ASC' ? sorted : sorted.reverse()
  }

  static paginate<T = any>(arr: T[], page: number, pick: number) {
    return arr.slice((page - 1) * pick, page * pick)
  }
}
