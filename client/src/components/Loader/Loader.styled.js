import styled from "styled-components";

const StyledLoaderWrapper = styled.div`
    width: 3em;
    height: 3em;
    padding: 8px;
    border-radius: 50%;
    background: linear-gradient(to right,${(props) => props.theme.colors.purple},${(props) => props.theme.colors.white})};
    animation: spin 1.5s linear infinite;
    @keyframes spin {
    to {
          transform: rotate(360deg);
    }
`
const StyledLoaderInner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
`

const StyledLoaderText = styled.p`
    color: ${(props) => props.theme.colors.text};
`
const StyledLoader = () => {
    return(
        <>
            <StyledLoaderText>Fetching books...</StyledLoaderText>
            <StyledLoaderWrapper>
                <StyledLoaderInner>
                </StyledLoaderInner>
            </StyledLoaderWrapper>
        </>
    )
}

export default StyledLoader