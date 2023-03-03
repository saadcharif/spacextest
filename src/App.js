import './App.css';
import React, { useState, useEffect } from 'react';
import ListOfPads from './components/pads/ListOfPads';
import Missions from './components/missions/Missions';
import styled  from "styled-components";
import { FaChevronDown } from "react-icons/fa";

function App() {
  const [isShowBody, setIsSHowBody] = React.useState(false);

  const onClickHandler = () => {
    setIsSHowBody(isShowBody => !isShowBody);
  }
  const [spaceData, setSpaceData] = useState([]);
    const getSpaceData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/landpads');
    const data1 = await response.json();
    setSpaceData(data1);
  }
  const [missionData, setMissionData] = useState([]);
  const getMissionData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data2 = await response.json();
    setMissionData(data2);
  }
   useEffect(() => {
    getSpaceData();
    getMissionData();
  }, []);
  
  return (
    <div className="App">
     
        <StyledAppContainer>
        <h1>SpaceX Landing Zones</h1>
        </StyledAppContainer>
        <ListOfPads spaceData={spaceData}/>

    <div className="main">
    <div className="content">
      <div className="content-header" onClick={onClickHandler}>
    <StyledAppContainer>
      <h1>SpaceX Missions <FaChevronDown></FaChevronDown></h1>
      <p>Click to view SpaceX Missions</p>
      </StyledAppContainer>
      
      </div>
        { isShowBody && <div className="content-body">
        <Missions missionData={missionData}/>

        </div>}
      </div>
    </div>
    <FooterContainer>
      <About>
        <h1>Saad Charif Tribak</h1>
        <p>
          SpaceX Data fetch App created for the purpose of providing a working example to ReciteMe
        </p>
    
      </About>
      <footer id="footer">
            <div class="footerLogos">
              <div class="icon">
                <svg height="80" width="80">
                  <circle
                    cx="20"
                    cy="20"
                    r="15"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div class="icon">
                <svg height="80" width="80">
                  <circle
                    cx="20"
                    cy="20"
                    r="15"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
    
              </div>

              <div class="icon">
                <svg height="80" width="80">
                  <circle
                    cx="20"
                    cy="20"
                    r="15"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div class="icon">
                <svg height="80" width="80">
                  <circle
                    cx="20"
                    cy="20"
                    r="15"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </footer>
    </FooterContainer>
    </div>
    
  );
  
}

export default App;
const StyledAppContainer = styled.div`
  color: #fff;
  background-color: #262626;
  padding: 10px;
  cursor: pointer;
`
const FooterContainer = styled.footer`
  min-height: 200px;
  background-color: #444;
  color: white;

  /* justify-content: space-between; */

  @media (min-width: 768px) {
    padding: 0.4rem 2rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const About = styled.div`
  color: white;
`;
