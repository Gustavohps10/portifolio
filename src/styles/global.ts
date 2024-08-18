import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: var(--font-montserrat);
    }

    :focus{
        outline: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background600};
        color:  ${({ theme }) => theme.colors.white};
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }
    
    body, input, textarea, button{
        font-family: var(--font-montserrat);
        font-weight: 400;
    }
`
