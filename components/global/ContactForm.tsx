import { Grid } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CustomTextField } from "../common/Textfield";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const items = [
  {id: 1,
   icon: <LocationOnIcon/>, 
   title: "Office Address",
   description: "201 W Washington Ave 2nd Floor Madison, WI 53703"
  },
  {id: 2,
   icon: <ContactMailIcon/>, 
   title: "Mailing Address",
   description: "P.O. Box 7984 Madison, WI 53707"
  },
  {id: 3,
   icon: <PhoneIcon/>, 
   title: "Phone",
   description: "02222200000"
  },
  {id: 4,
   icon: <EmailIcon/>, 
   title: "Email",
   description: "test@gmail.com"
  },
]
const ContactForm = () => {
  
  return (
    <React.Fragment>
      <Grid className="w-full bg-gray-800 p-5">
        <Grid container>
          <Grid item xs={12}>
          <h1 className="text-slate-50 text-center text-4xl font-bold uppercase mb-5">Contact Information</h1>
          <Grid container className="w-full flex items-center justify-center md:justify-between mb-5 pb-5">
            {items.map((item)=> (
              <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={3}
              sx={{maxWidth:'13rem'}}
              className="counter_item_global min-h-[10rem] mb-3 p-2 flex flex-col items-center justify-start bg-gray-600 text-slate-50 rounded"
            >
               <div className="mt-1">{item.icon}</div>
               <p className="font-bold">{item.title}</p>
              <p className="mt-2 text-sm text-slate-50">{item.description}</p>
              
            </Grid>
            ))}           
          </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
          <p className="text-2xl pl-0 mb-2 text-slate-50">Send a Message</p>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomTextField
                    variant="standard"
                    label="Full Name"
                    placeholder="Enter your email address"
                    fullWidth
                    inputColor= "white"
                    labelColor="white"
                    underlineAfterColor="white"
                    underlineBeforeColor="white"
                    underlineBeforeHoverColor="white"
                    />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    variant="standard"
                    label="Email"
                    placeholder="Enter your email address"
                    fullWidth
                    inputColor= "white"
                    labelColor="white"
                    underlineAfterColor="white"
                    underlineBeforeColor="white"
                    underlineBeforeHoverColor="white"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    multiline
                    minRows={4}
                    variant="standard"
                    placeholder="Enter your message"
                    label="Message"
                    fullWidth
                    inputColor= "white"
                    labelColor="white"
                    underlineAfterColor="white"
                    underlineBeforeColor="white"
                    underlineBeforeHoverColor="white"
                  />
                </Grid>
                <Grid item xs={12}>
                    <button className="focus:outline-none border-none px-3 py-2 bg-pink-800 hover:bg-pink-700 text-slate-50 rounded">Send</button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item sm={12} md={6} className=" text-slate-50 font-serif">
            <Grid sx={{ pl: { sm: 0, md: 5 }, pt: {sm:3, md:0}, mt: {sm:5, md:0} }}>
              <p className="text-2xl pl-0">Get in touch</p>
              <p className="text-sm font-semibold pl-0 mt-4">
                Contrairement à une opinion répandue, le Lorem Ipsum n&apos;est pas
                simplement du texte aléatoire.
              </p>
              <p className="text-sm pl-0 mt-4">
                On sait depuis longtemps que travailler avec du texte lisible et
                contenant du sens est source de distractions, et empêche de se
                concentrer sur la mise en page elle-même.
              </p>
              <div className="w-1/2 pl-0 mt-4 flex items-center justify-between">
                <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><FacebookIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><InstagramIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><TwitterIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=100084751181209" target="blank"><LinkedInIcon /></a>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ContactForm;
