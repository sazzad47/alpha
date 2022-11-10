import React from "react";
import { Grid, Typography, List, ListItemText } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import footerBackground from '../../public/global/bg-footer.jpg'

const legacyLinks = [
  { id: 1, name: "Terms", path: "/terms" },
  { id: 2, name: "Privacy Policy", path: "/privacy-policy" },
  { id: 3, name: "Cookie", path: "/cookie" },
  { id: 4, name: "Sitemap", path: "/sitemap" },
];
const supportLinks = [
  { id: 1, name: "Contact Us", path: "/contact" },
  { id: 2, name: "Help Center", path: "/help-center" },
  { id: 3, name: "Security", path: "/security" },
  { id: 4, name: "FAQs", path: "/faqs" },
];
const companyLinks = [
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "What we offer", path: "/offers" },
  { id: 3, name: "Affiliates", path: "/affiliates" },
  { id: 4, name: "Investors", path: "/investors" },
];
const usefulLinks = [
  { id: 1, name: "Account", path: "/account" },
  { id: 2, name: "Order Tracking", path: "/order-tracking" },
  { id: 3, name: "Refund Policy", path: "/refund-policy" },
  { id: 4, name: "Payment", path: "/payment" },
];

const Footer = () => {
  return (
    <React.Fragment>
      <Grid sx={{backgroundImage: `url(${footerBackground.src})`}} className="bg_image w-full px-5 pt-5 text-slate-50">
        <Grid container className="w-full">
          <Grid item xs={12}>
            <Grid container className="flex items-center justify-center">
              <Grid
                item
                xs={12}
                md={3}
                // sx={{justifyContent:{ sx:'flex-start', md: 'center'}}}
                className="flex items-center"
              >
                <List>
                  {companyLinks.map((item) => (
                    <ListItemText key={item.id}>
                      <Link href={`${item.path}`}>{item.name}</Link>
                    </ListItemText>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                // sx={{justifyContent:{ sx:'flex-start', md: 'center'}}}
                className="flex items-center"
              >
                <List>
                  {supportLinks.map((item) => (
                    <ListItemText key={item.id}>
                      <Link href={`${item.path}`}>{item.name}</Link>
                    </ListItemText>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                // sx={{justifyContent:{ sx:'flex-start', md: 'center'}}}
                className="flex items-center"
              >
                <List>
                  {legacyLinks.map((item) => (
                    <ListItemText key={item.id}>
                      <Link href={`${item.path}`}>{item.name}</Link>
                    </ListItemText>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                // sx={{justifyContent:{ sx:'flex-start', md: 'center'}}}
                className="flex items-center"
              >
                <List>
                  {usefulLinks.map((item) => (
                    <ListItemText key={item.id}>
                      <Link href={`${item.path}`}>{item.name}</Link>
                    </ListItemText>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="my-2 border-t-[1px] pt-2">
            <Typography variant="body2" align="center">
              {"Copyright © "}
              <span className="me-2">Lilo</span>
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
