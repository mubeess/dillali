import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import NavStyles from './NavStyles'

const StyledNav=styled.nav`
 @media screen and (max-width:586px){
      display: none;

 }

`;

export default function Nav() {
    return (
    <NavStyles>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/contact'>Contact</Link>
        {/* <Link href='/account'>Account</Link>
        <Link href='/sign'>Sign Up</Link> */}
    </NavStyles>
    )
}
