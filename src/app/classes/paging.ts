export class Paging {
    constructor(public total_items: number = 0, public current_page: number = 0, public total_pages: number = 0){}

    next() {
        return this.current_page + 1;
    }

    previous() {
        return this.current_page - 1;
    }
}