import IPerson from './IPerson';

export class Person implements IPerson {

  readonly id: number;
  readonly name: string;
  readonly surname: string;

  private randomNames: string[] = ['Petr', 'John', 'Brad', 'Angelina', 'Steve', 'Bruce', 'Charlie', 'Meg'];

  private randomSurnames: string[] = ['Malkovich', 'Vystyd', 'Pitt', 'Jolie', 'Buscemi', 'Willis', 'Sheen', 'Ryan'];

  public constructor(name?, surname?) {
    this.id = Math.floor(Math.random() * this.randomSurnames.length);
    this.name = name ? name : this.randomNames[this.id];
    this.surname = surname ? surname : this.randomSurnames[this.id];
  }

  public getId() {
    return this.id;
  }

  public getUserInfo(): string {
    return this.name + ' ' + this.surname + ' #' + this.getId();
  }

}
