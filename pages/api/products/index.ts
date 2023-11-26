import lanes from "../bankOfLanes"

// http://localhost:3000/api/products
// Returns a list of ids of lanes
export default (req,res) => {
    res.status(200).json(lanes.map(lane => lane.id))
}