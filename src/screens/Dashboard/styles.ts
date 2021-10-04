import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};
`