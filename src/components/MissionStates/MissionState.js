import styled, { css } from "styled-components";


const MissionState = ({ missionData }) => {
    return (

        <Card>
        <CardInner>
          <CardFront>
          <h2>{missionData.mission_name}</h2>
          <h4>{missionData.website}</h4>


          </CardFront>
          <CardBack>
          <h2>{missionData.mission_id}</h2>
          <h3>{missionData.manufacturers}</h3>
          <p>{missionData.description}</p>


          </CardBack>
        </CardInner>
      </Card>
    )
}



export default MissionState;
const CardInner = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Card = styled.div`
  background-color: transparent;
  display: inline-block;
  width: 300px;
  height: 220px;
  perspective: 1000px;
  padding:10px;
    

  ${CardInner}:hover {
    transform: rotateY(180deg);
    
  }
`;

const absoluteStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow:scroll;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const CardFront = styled.div`
  height: 100%;
  width: 100%;
  padding:10px;
  ${absoluteStyle}
`;

const CardBack = styled.div`
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  ${absoluteStyle}
`;