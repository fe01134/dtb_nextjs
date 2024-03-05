// models/place.ts
class Place {

  private id : number;
  private name : string;
  private full_name : string;

  constructor(id: number, name: string, full_name: string) {
    this.id = id;
    this.name = name;
    this.full_name = full_name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getFullName(): string {
    return this.full_name;
  }

  static createPlace(id: number, name: string, full_name: string): Place {
    return new Place(id, name, full_name);
  }
}
  
  export default Place;
  