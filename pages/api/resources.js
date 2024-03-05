import resources from '../api/data'
// invoke this api using http://localhost:3000/api/resources

export default function(req,resp){
    resp.send(resources)
}