import { Grid, InputBase, Stack } from "@mui/material";
import {
  Btn,
  Card2,
  FirstCard,
  FooterCont,
  Form,
  Form1,
  Icon,
  Icons,
  Logo,
} from "./Footer.styled";
import { logoLight, paymentLogo } from "../../assets";
import {
  AccountBalanceRounded,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { MMContainer } from "../Shopping/Shopping.styled";
import Person2Icon from "@mui/icons-material/Person2";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footer = () => {
  return (
    <FooterCont>
      <MMContainer>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sm={6}
            lg={3}
            sx={{
              textAlign: {
                xs: "center",
                md: "center",
              },
            }}
          >
            <FirstCard>
              <Logo
                src={logoLight}
                sx={{
                  width: "100px",
                }}
              />
              <p>© ReactBD.com</p>
              <Logo src={paymentLogo} />
              <Icons>
                <Icon>
                  <GitHub />
                </Icon>
                <Icon>
                  <Facebook />
                </Icon>
                <Icon>
                  <LinkedIn />
                </Icon>
                <Icon>
                  <Instagram />
                </Icon>
              </Icons>
            </FirstCard>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sm={6}
            lg={3}
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
            }}
          >
            <Card2>
              <h3>Information</h3>
              <ul>
                <li>MBD,Ruwi, Muscat-Oman</li>
                <li>Mobile: 00968 97859628</li>
                <li>Phone: 00968 24769821</li>
                <li>e-mail: bazar@gmail.com</li>
              </ul>
            </Card2>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sm={6}
            lg={3}
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
            }}
          >
            <Card2>
              <h3>profile</h3>
              <ul>
                <li>
                  <Person2Icon /> my account
                </li>
                <li>
                  <CurrencyBitcoinIcon /> checkout
                </li>
                <li>
                  <HouseIcon /> order tracking
                </li>
                <li>
                  <LocationOnIcon /> help & support
                </li>
              </ul>
            </Card2>
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={3}>
            <Form>
              <Form1>
                <InputBase placeholder="Enter your email" />
              </Form1>
              <Btn>Subscribe</Btn>
            </Form>
          </Grid>
        </Grid>
      </MMContainer>
    </FooterCont>
  );
};

export default Footer;
