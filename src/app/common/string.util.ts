export class StringUtil {

  /**
   * Returns today date with format yyyy-mm-dd eg) 2020-04-10
   * @returns {string}
   */
  public static getTodayDate() {
    let date = new Date();
    let today = date.getFullYear() + '-' + (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-' + (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate())
    return today
  }
}
