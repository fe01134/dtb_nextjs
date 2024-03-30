// model/event.ts
class MyEvent {

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

  static createMyEvent(id: number, name: string, full_name: string): MyEvent {
    return new MyEvent(id, name, full_name);
  }
}
  
  export default MyEvent;
  