export default class WorkExperience {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  current: boolean;
  responsibilities: string[];
  constructor(company: string, position: string, start_date: string, end_date: string, current: boolean, responsibilities: string[]) {
    this.company = company;
    this.position = position;
    this.start_date = start_date;
    this.end_date = end_date;
    this.current = current;
    this.responsibilities = responsibilities;
  }
}