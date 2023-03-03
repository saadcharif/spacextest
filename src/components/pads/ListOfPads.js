import Zone from '../zones/Zone';

const ListOfPads = ({ spaceData}) => {
    return (

        <>
        {spaceData.length >0 && spaceData.map(data1 => (
            <Zone zoneData={data1} />
        ))}
        
        </>
    )
}



export default ListOfPads;
