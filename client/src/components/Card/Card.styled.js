import styled from "styled-components";

const StyledCard = styled.div`
    background-color: ${(props) => props.theme.colors.purple};
    color: white;
    font-size: ${(props) => props.theme.fontSizes.H4};
    width: 50%;
`
export default StyledCard