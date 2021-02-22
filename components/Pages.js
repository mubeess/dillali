import Header from './Header'
import Head from 'next/head'
import styled,{createGlobalStyle} from 'styled-components'
import Footer from './Footer';
import Spinner from './Spinner';

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
          <Head>
 <title>Dillali | App For Agents | Find Available House Rent,House To Let, and Car Sale from Your Location </title>
<meta name="description" content="Agents for both houses and cars in Nigeria are lacking a unique and enhaced plartform to connect them with those in need, these plartform brings the cure."/>
<meta name="viewport" content="initial-scale=1.0, width=device-width" />
<meta property="og:title" content="Dillali | App for agents" />
<meta property="og:url" content="https://www.dillali.vercel.app" />
<meta property="og:image" content="/logo.png" />
<link rel="icon" href="/logo1.png" />

          </Head>
          <GlobalStyles></GlobalStyles>
          <Header> </Header>
          {children} 
          <Footer></Footer>
          <Spinner></Spinner>
        </div>
    )
}
