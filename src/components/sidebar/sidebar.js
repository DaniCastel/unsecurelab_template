import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  FaHome,
  FaUserSecret,
  FaLinkedin,
  FaGithub,
  FaHashtag
} from 'react-icons/fa'
import MainImg from '../main-img'

const Sidebar = styled.div`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 20%;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 20%;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 10%;
    justify-content: flex-start;
    align-items: center;

    &::before {
      content: '';
      margin: 10px;
    }
  }

  display: flex;
  flex-direction: column;
  width: 30%;
  background-image: url('./background.jpg');
  /* background-image: linear-gradient(to right, #011638, #27476e); */
  color: white;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 80px;
    height: 80px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  border-radius: 50%;
  overflow: hidden;
  width: 152px;
  height: 152px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`

const MenuWrapper = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    div {
      margin: 0;
    }
    span {
      display: none;
    }
  }

  display: flex;
  flex-direction: row;
  div {
    margin: 10px;
  }
`

const SiteTitle = styled.h1`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 16px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

const NameBoard = styled.h5`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 12px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

export default ({ title, description }) => (
  <Sidebar>
    <MainImg></MainImg>
    <StyledLink to="/">
      <SiteTitle>{title}</SiteTitle>
    </StyledLink>
    <Logo
      src="data:image/svg+xml,%3Csvg id='svg' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='400' height='502' viewBox='0, 0, 400,502'%3E%3Cg id='svgg'%3E%3Cpath id='path0' d='M188.800 8.865 C 144.483 13.022,106.021 42.541,88.815 85.600 C 83.164 99.743,78.112 122.008,80.300 123.131 C 81.349 123.670,87.958 123.927,93.562 123.647 L 98.523 123.400 99.816 117.400 C 105.675 90.202,115.392 71.736,132.442 55.400 C 179.616 10.203,250.246 23.585,283.006 83.927 C 288.042 93.202,288.795 93.530,302.789 92.537 L 306.501 92.273 306.265 90.037 C 304.874 76.824,284.765 48.002,267.200 34.043 C 244.816 16.254,214.345 6.469,188.800 8.865 M292.000 104.994 L 292.000 108.099 300.300 107.925 C 308.905 107.745,310.118 107.518,310.600 106.000 C 311.492 103.189,309.141 102.361,299.500 102.095 L 292.000 101.888 292.000 104.994 M298.510 117.566 C 295.824 117.893,295.529 118.234,295.677 120.843 C 295.840 123.696,296.586 123.960,304.400 123.939 C 314.534 123.911,316.477 122.964,313.326 119.592 C 311.171 117.285,306.304 116.620,298.510 117.566 ' stroke='none' fill='%235c5c5c' fill-rule='evenodd'%3E%3C/path%3E%3Cpath id='path1' d='M78.798 121.654 C 78.039 124.356,77.487 124.523,66.413 125.398 C 37.473 127.686,23.549 138.146,18.757 161.200 C 16.663 171.274,17.062 317.159,19.224 332.000 C 23.364 360.414,36.215 391.401,53.140 413.780 C 83.676 454.155,126.477 479.179,176.357 485.820 C 196.510 488.502,238.708 484.233,248.488 478.521 L 249.800 477.755 250.029 363.578 C 250.197 279.795,250.381 248.894,250.717 247.500 C 252.221 241.273,259.628 238.425,265.133 241.957 C 268.366 244.031,268.219 241.401,268.765 307.000 C 269.777 428.501,270.110 462.059,270.348 466.200 L 270.600 470.600 271.600 470.470 C 273.023 470.286,277.485 468.218,282.600 465.372 C 335.176 436.115,370.239 383.586,375.399 326.348 C 377.072 307.792,377.242 167.672,375.611 152.000 C 374.810 144.305,373.145 140.811,367.600 135.182 C 359.881 127.346,356.798 126.445,334.800 125.598 C 328.750 125.365,322.124 125.073,320.075 124.948 L 316.350 124.722 315.708 123.376 C 315.191 122.292,314.982 122.139,314.633 122.589 C 313.947 123.473,309.906 124.002,304.027 123.977 C 296.929 123.948,295.880 123.604,295.560 121.200 C 295.428 120.210,295.293 119.733,295.260 120.140 C 295.129 121.751,293.920 123.550,292.668 123.996 C 290.437 124.792,266.946 125.171,217.800 125.204 C 165.062 125.240,147.466 125.562,146.517 126.511 C 145.567 127.462,145.240 153.785,145.180 234.200 C 145.119 317.677,144.781 353.590,144.040 355.400 C 141.349 361.978,134.437 362.421,128.300 356.409 L 124.800 352.980 124.800 262.956 C 124.800 152.728,124.573 127.502,123.570 126.263 C 122.898 125.432,122.493 125.391,112.736 125.166 C 100.943 124.895,99.368 124.504,99.165 121.800 C 99.127 121.286,99.014 121.428,98.850 122.200 L 98.595 123.400 93.597 123.647 C 82.696 124.187,79.710 123.658,79.523 121.152 L 79.400 119.508 78.798 121.654 ' stroke='none' fill='%23dcb40c' fill-rule='evenodd'%3E%3C/path%3E%3C/g%3E%3C/svg%3E"
      alt="unsecurelab logo"
    />
    <NameBoard>{description}</NameBoard>
    <MenuWrapper>
      <div>
        <p>
          <StyledLink to="/about">
            <FaUserSecret /> <span>About</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/">
            <FaHome /> <span>Members</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/tags">
            <FaHashtag /> <span>Tags</span>
          </StyledLink>
        </p>
      </div>
      <div>
        <p>
          <StyledHref
            href="https://www.linkedin.com/in/vimalraj-selvam/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin /> <span>Linkedin</span>
          </StyledHref>
        </p>
        <p>
          <StyledHref
            href="https://github.com/email2vimalraj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>Github</span>
          </StyledHref>
        </p>
      </div>
    </MenuWrapper>
  </Sidebar>
)
