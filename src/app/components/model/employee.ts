export class Employee {
     name: string;
     rank: number;

     constructor(name: string, rank?: number ) {
      this.name = name;
      this.rank = rank || 0;
     }
    rankUp(): void {
     this.rank += 1;
    }
    rankDown(): void {
     this.rank -= 1;
    }
}
