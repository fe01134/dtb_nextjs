import Place from '../../../model/place'; 


interface PlaceProps {
    value: Place
}

export default function PlaceTile( props:PlaceProps){
    const place = props.value;

    return(

        <div key={place.getUid()}>
        PLACE
        ------------
        {place.getName()}
        {place.getUid()}
        ------------
        </div>
    )

}