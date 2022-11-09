import React from 'react'
import {Grid, Typography, List, ListItemText} from '@mui/material'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from 'next/link';

const legacyLinks = [
     {id: 1,
      name: "Terms",
      path: "/terms"
    },
     {id: 2,
      name: "Privacy Policy",
      path: "/privacy-policy"
    },
     {id: 3,
      name: "Cookie",
      path: "/cookie"
    },
     {id: 4,
      name: "Sitemap",
      path: "/sitemap"
    },
]
const supportLinks = [
     {id: 1,
      name: "Contact Us",
      path: "/contact"
    },
     {id: 2,
      name: "Help Center",
      path: "/help-center"
    },
     {id: 3,
      name: "Security",
      path: "/security"
    },
     {id: 4,
      name: "FAQs",
      path: "/faqs"
    },
]
const companyLinks = [
     {id: 1,
      name: "About",
      path: "/about"
    },
     {id: 2,
      name: "What we offer",
      path: "/offers"
    },
     {id: 3,
      name: "Affiliates",
      path: "/affiliates"
    },
     {id: 4,
      name: "Investors",
      path: "/investors"
    },
]

const Footer = () => {
  return (
    <React.Fragment>
        <Grid className='w-full px-5 pt-5 text-slate-50 bg-gray-800'>
            <Grid container className='w-full'>
                <Grid item xs={12}>
                    <Grid container className='flex items-center justify-between'>
                        <Grid item xs={12} md={4} className='flex items-center justify-start'>
                            <List>
                                {companyLinks.map((item) => (
                                    <ListItemText key={item.id}>
                                        <Link href={`${item.path}`}>{item.name}</Link>
                                    </ListItemText>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4} className='flex items-center justify-center'>
                            <List>
                                {supportLinks.map((item) => (
                                    <ListItemText key={item.id}>
                                        <Link href={`${item.path}`}>{item.name}</Link>
                                    </ListItemText>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4} className='flex items-center justify-end'>
                            <List>
                                {legacyLinks.map((item) => (
                                    <ListItemText key={item.id}>
                                        <Link href={`${item.path}`}>{item.name}</Link>
                                    </ListItemText>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='flex justify-center border-b-2 mt-2'>
                    <div className="w-1/3 my-4 flex items-center justify-between">
                        <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><FacebookIcon /></a>
                        <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><InstagramIcon /></a>
                        <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><TwitterIcon /></a>
                        <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><LinkedInIcon /></a>
                    </div>
                </Grid>
                <Grid item xs={12} className="my-2">
                <Typography
                    variant="body2"
                    align="center"
                    >
                    {"Copyright © "}
                    <span className="me-2">Lilo</span>
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default Footer