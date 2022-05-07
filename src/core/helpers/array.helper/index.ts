/**
 * some helper methods that make it easier to use the arrays
 */
export class Arr {
  /**
   *
   *
   * sorts an array of objects, according to a specific key
   *
   * @param arr an array of objects
   * @param by the key of objects inside arrays
   * @param type sort type
   * @returns sorted array according to the key
   */
  static sortArrOfObj(arr: any[], by: string, type: 'ASC' | 'DESC' = 'ASC') {
    const sorted = arr.sort((a, b) => (a[by] > b[by] ? 1 : b[by] > a[by] ? -1 : 0))
    return type === 'ASC' ? sorted : sorted.reverse()
  }

  /**
   *
   *
   * paginates an array of any according to the given page number and picked items
   *
   * @param arr an array of any
   * @param page the page number
   * @param pick how much data you need
   * @returns spliced (paginated) array
   */
  static paginate<T = any>(arr: T[], page: number, pick: number) {
    return arr.slice((page - 1) * pick, page * pick)
  }
}
