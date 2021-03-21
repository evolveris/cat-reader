import StyledCard from './Card.styled';

function Card ({ title, author, shelf, isbn }) {
    return (
      <StyledCard>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h4>{shelf}</h4>
      </StyledCard>
    );
}
  
export default Card;