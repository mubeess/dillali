import Header from './Header'
import styled,{createGlobalStyle} from 'styled-components'
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGray);
    --offWhite: #fefefe;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(---black);
    font-family:sans-serif;
  }
  a:hover,
  a:focus {
    color:#f2f2f2
  }
  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  }
`;
const Logo = styled.h1`
  /* This renders the buttons above... Edit me! */
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background:var(--red);
  color: white;
  width:200px;
  transform:skewX(-10deg);
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  font-weight:lighter;
  text-transform:uppercase;

`
export default function Pages({children}) {
    return (
        <div>
          <GlobalStyles></GlobalStyles>
          <Header></Header>
          {children} 
          <Footer></Footer>
        </div>
    )
}
