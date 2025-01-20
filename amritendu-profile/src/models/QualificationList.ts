import Qualification from './Qualification';
export default class QualificationList {
    category: string;
    category_type: number;
    items: Qualification[];
    constructor(category: string, category_type: number, items: Qualification[]) {
        this.category = category;
        this.category_type = category_type;
        this.items = items;
    }
}