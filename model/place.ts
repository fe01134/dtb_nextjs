import Activity from "./activity";

// model/place.ts
class Place {
  private type : string;
  private uid : string;
  private name : string;
  private district : string;
  private council : string;
  private area : string;
  private description : string;
  private photoName : string;
  private tags : string[];
  private activities : string[];


  constructor(type : string, uid: string, name: string, district : string, council: string, area: string, description: string, photoName: string, tags: string[], activities: string[]) {
    this.type = type;
    this.uid = uid;
    this.name = name;
    this.district = district;
    this.council = council;
    this.area = area;
    this.description = description;
    this.photoName = photoName;
    this.tags = tags;
    this.activities = activities;
  }

  getType(): string {
    return this.type;
  }

  getUid(): string {
    return this.uid;
  }

  getName(): string {
    return this.name;
  }

  getDistrict(): string {
    return this.district;
  }

  getCouncil(): string {
    return this.council;
  }
    
  getArea(): string {
    return this.area;
  }

  getDescription(): string {
    return this.description;
  }

  getPhotoName(): string {
    return this.photoName;
  }

  getTags(): string[] {
    return this.tags;
}

  getActivities(): string[] {
      return this.activities;
  }
 
  static createPlace(type: string, uid: string, name: string, district : string, council: string, area: string, description : string, photoName: string, tags: string[], activities : string[]): Place {
    return new Place(type, uid, name, district, council, area, description, photoName, tags, activities);
  }
  
};

export default Place ;
  