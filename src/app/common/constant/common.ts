export class Page {
  public CURRENT_PAGE: number = 1;
  public ITEMS_PER_PAGE: number	= 20;
  public TOTAL_ITEMS: number= 0;

  constructor(page: {current_page: number, items_per_page: number, total_items: number}) {
    this.CURRENT_PAGE = page.current_page;
    this.ITEMS_PER_PAGE = page.items_per_page;
    this.TOTAL_ITEMS = page.total_items;
  }
}
