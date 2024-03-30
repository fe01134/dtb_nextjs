import Place from "./place";

class Activity {

  private name : string;
  private description : string;
  
  private places :Place[];

  constructor(name: string, description: string,places: Place[]) {
    this.name = name;
    this.description = description;
    this.places = places;
  }

  getName(): string {
    return this.name;
  }

  getActivityNames(): string[] {
    return this.places.map(place => place.getName());
  }
  static createActivity(name: string, description: string, places: Place[]): Activity {
    return new Activity(name, description, places);
  }
};

export default Activity ;