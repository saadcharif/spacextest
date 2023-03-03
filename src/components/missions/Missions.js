import MissionState from "../MissionStates/MissionState";

const Missions = ({ missionData}) => {
    return (

        <>
        {missionData.length >0 && missionData.map(data2 => (
            <MissionState missionData={data2} />
        ))}
        
        </>
    )
}



export default Missions;
