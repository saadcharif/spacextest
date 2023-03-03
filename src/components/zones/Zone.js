import styled from 'styled-components';

const Zone = ({ zoneData }) => {
    return (

<ZoneContainer>
    <ZoneHeader>   
        <h2>{zoneData.id}</h2>
    </ZoneHeader>
       <h2>{zoneData.full_name}</h2>
       <p>{zoneData.location.name}</p>
       <p>{zoneData.location.region}</p>
       <p>{zoneData.status}</p>
</ZoneContainer>
    )
}



export default Zone;
const ZoneContainer = styled.div`
background: #fff;
display: inline-block;
max-height:270px;
overflow:scroll;
width: 24em;
border-radius: 0.6em;
margin: 1em;
overflow: hidden;
cursor: pointer;
box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
transition: all ease 200ms;
&:hover{
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
}
`;
const ZoneHeader = styled.div`
    background-color: #000;
    color:white;
    padding: 1px 10px;
    border-radius: 10px 10px 0 0;
`;