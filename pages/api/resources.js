import data from './data.json'
// invoke this api using http://localhost:3000/api/resources

export default function(req,resp){
    resp.send(data)
}