interface Activity {
  activity: string;
  type: string;
  places: Place[];
}

interface Place {
  name: string;
  tags: string[];
}

interface Area {
  name: string;
  activities: Activity[];
}
  
  class Area {
    private data: Area;
  
    constructor(data: Area) {
      this.data = data;
    }
  
    getPlaceNames(): string[] {
      return Object.keys(this.data);
    }
  
    getAreaNames(placeName: string): string[] {
      const cityData = this.data[placeName];
      return cityData ? Object.keys(cityData.Areas) : [];
    }
  
    getActivities(placeName: string, areaName: string): Activity[] {
      const cityData = this.data[placeName];
      const areaData = cityData ? cityData.Areas[areaName] : null;
      return areaData ? areaData.Activities?.map((a) => a.Activity) || [] : [];
    }

    static createArea(data: Area): Area {
      return new Area(data);
    }

  }
  
  export default Area;
  