class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private door: boolean = false;
  private key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  isDoorOpen(): boolean {
    return this.door;
  }

  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }

  abstract comeIn(person: Person): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  comeIn(person: Person): void {
    if (this.isDoorOpen()) {
      this.tenants.push(person);
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
