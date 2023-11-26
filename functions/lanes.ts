import LaneModel from "../model/lane";
import lanes from '../pages/api/bankOfLanes'
// Create doors using javascript
// Array.from({length:10}, (_, i) => i +1)

export function getLanes(): LaneModel[] {
    const ids = lanes.map(lane => questao.id)

    return LaneModel(id, description, steps, selected) 

export function updateLanes(doors: LaneModel[], modifiedLane:LaneModel): LaneModel[]{
    return doors.map(selectedLane => {
        const sameLaneModified = selectedLane.id === modifiedLane.id

        if (sameLaneModified ) {
            return modifiedLane
        } else {
            // Logic if the door is opened you can only open it one time then  return the same door opened
            // else selectDoor and unselect the other doors.
            return modifiedLane.id ? selectedLane : selectedLane.desselecionar()
        }
    })
}