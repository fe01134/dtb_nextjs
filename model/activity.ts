import Place from "./place";

class Activity {

  private name : string;

  constructor(name: string,  public places: Place[]) {
    this.name = name;
    this.places = places;

  }

  getName(): string {
    return this.name;
  }

  getPlaceNames(): string[] {
    return this.places.map(place => place.getName());
  }
  static createActivity(name: string, places: Place[]): Activity {
    return new Activity(name, places);
  }
};

export default Activity ;