export default class Qualification {    
    id: number;
    name: string;
    board: string;
    year: string;
    marks: string;
    percentage: string;
    constructor(id: number, name: string, board: string, year: string, marks: string, percentage: string) {
        this.id = id;
        this.name = name;
        this.board = board;
        this.year = year;
        this.marks = marks;
        this.percentage = percentage;
    }
}