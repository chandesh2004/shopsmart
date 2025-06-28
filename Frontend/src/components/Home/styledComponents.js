import styled from 'styled-components';
import bgImage from './top-view-organic-food-frame-design_23-2151944966[1].avif'; // Adjust path if needed

export const HomeContainer = styled.section`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  color: #000;
  height:100vh;
  margin-top:10vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align: center;
  padding: 150px 0;
`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentColumn = styled.div`
  flex: 1;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 20px;
`;

export const PrimaryButton = styled.button`
  padding: 20px 40px;
  font-size: 30px;
  font-family:'Bree Serif';
  border-radius:5px;
  font-weight:bold;
  background-color:rgb(184, 152, 8);
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color:rgb(186, 106, 44); /* Darker pink for hover */
  }
`;