import React from "react";
import { Grid, Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import RightArrow from "../../assets/Icon/RightArrow";
import { makeStyles } from "@mui/styles";
const data = [
  {
    subHeading1: "STREAMLINE RECRUITING",
    mainHeading: "Accelerate your admissions cycle",
    paragraph:
      "Recruit more efficiently, interview prospective students faster, and deliver an exceptional experience to every applicant throughout the interview process.",
    subHeading2: "Embeded Calendly on your website",
    image: "/Calendly-Round-Robin-Education__2_.webp",
    imageRight: true,
  },
  {
    subHeading1: "BOOK INSTANTLY",
    mainHeading: "Schedule student meetings in just a few clicks",
    paragraph:
      "Make it easy and fast for students to book advising hours while ensuring that educators and faculty can maintain control of their schedules.",
    subHeading2: "Set your avaibility",
    image: "/Calendly-education-scheduling.webp",
    imageRight: false,
  },
  {
    subHeading1: "BE ACCESSIBLE",
    mainHeading: "Support students when they need it most",
    paragraph:
      "Increase student performance by making services and resources more accessible to them with simplified scheduling. Enable students to easily pick a time for a dedicated meeting - in person or virtually.",
    subHeading2: "Share your avaibility for any ocassion",
    image: "/Calendly-Email-Embed-Education.webp",
    imageRight: true,
  },
  {
    subHeading1: "REDUCE ADMIN COSTS",
    mainHeading: "Simplify technology and resource management",
    paragraph:
      "Cut costs and save time by enabling staff to reserve equipment and resources. Collect key information at the time of reservation to provide staff and students with the right equipment and training materials.",
    subHeading2: "Embeded Calendly on your website",
    image: "/Calendly-education-admin.webp",
    imageRight: false,
  },
];
const animationVariants = {
  offscreen: { y: 0, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const textAnimationVariants = {
  offscreen: { y: 0, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    backgroundColor: "#F7FAFF !important",
  },
  h6: {
    fontWeight: "600 !important",
    color: "#006BFF",
    fontSize: "1rem !important",
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: "24px !important",
  },
  h2: {
    fontSize: "3rem !important",
    lineHeight: "1.4 !important",
    color: "#1d344b",
    fontWeight: "700 !important",
  },
  increaseCollaboration: {
    fontSize: "3rem !important",
    lineHeight: "1.4 !important",
    color: "#1d344b",
    fontWeight: "700 !important ",
    "@media (max-width: 600px)": {
      fontSize: "2rem !important",
    },
    "@media (max-width: 360px)": {
      fontSize: "1.5rem !important",
    },
  },
  h3: {
    fontSize: "2.4rem !important",
    lineHeight: "1.4 !important",
    color: "#1d344b",
    fontWeight: "700 !important",
  },
  paragraph: {
    width: "100% !important",
    lineHeight: "1.4 !important",
    fontWeight: "500 !important",
    color: "#425466 !important",
    height: "auto",
    marginBottom: "32px !important",
    fontSize: "1.25rem !important",
  },
  subHeading: {
    display: "flex!important",
    cursor: "pointer",
    fontWeight: "600 !important",
    color: "#006BFF !important",
    fontSize: "1rem !important",
    lineHeight: 1.2,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: "24px !important",
    textDecoration: "none!important",
    "&:hover": {
      color: "#000000 !important",
      cursorPointer: "pointer",
    },
  },
}));
function SchedulingSection() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 1 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Grid
          container
          justifyContent="center"
          spacing={2}
          marginTop={2}
          paddingBottom={{ xs: 3 }}
        >
          <motion.div variants={textAnimationVariants}>
            <Box padding={2} sx={{ maxWidth: "770px", textAlign: "center" }}>
              <Typography className={classes.h6}>
                EASY SCHEDULING AHEAD
              </Typography>
              <Typography className={classes.increaseCollaboration}>
                Increase collaboration between students, faculty, and staff
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </motion.div>
      {data.map((item, index) => {
        return (
          <motion.div
            index={index}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <Grid
              container
              spacing={2}
              marginBottom={{ xs: 3 }}
              paddingLeft={{ xs: 2, md: 8 }}
              paddingRight={{ xs: 2, md: 8 }}
            >
              <Grid
                item
                xs={12}
                md={6}
                alignItems="center"
                container
                padding={"0 !important"}
                order={data.imageRight ? { md: 1 } : { md: 2 }}
              >
                <motion.div variants={textAnimationVariants}>
                  <Box
                    paddingRight={{ xs: 0, md: item.imageRight ? 16 : 0 }}
                    paddingLeft={{ xs: 0, md: item.imageRight ? 0 : 16 }}
                  >
                    <Typography className={classes.h6}>
                      {item.subHeading1}
                    </Typography>
                    <Typography className={classes.h3} marginBottom={3}>
                      {item.mainHeading}
                    </Typography>
                    <Typography className={classes.paragraph}>
                      {item.paragraph}
                    </Typography>
                    <Grid container                           className={`${classes.h6} ${classes.subHeading}`}>
                      <Typography alignItems="center" flex>
                        <Link
                          href={"/readme"}
                          className={`${classes.h6} ${classes.subHeading}`}
                          alignItems="center" flex
                        >
                          {item.subHeading2} 
                        </Link>
                      </Typography><RightArrow />
                    </Grid>
                  </Box>
                </motion.div>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                order={item.imageRight ? { md: 2 } : { md: 1 }}
              >
                <motion.div variants={animationVariants}>
                  <Box>
                    <Image
                      src={item?.image}
                      alt="My Image"
                      width={1000}
                      height={800}
                      layout="responsive"
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        );
      })}
    </Grid>
  );
}

export default SchedulingSection;
