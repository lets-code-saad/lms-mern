import React, { useEffect, useState } from "react";
import "./AllCourses.css";
import Navbar from "../../../Header/Navbar/Navbar";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../../Footer/Footer";


const AllCourses = () => {
  const allCourses = [
    {
      title: "HELLO MY NAME IS SAAD",
      author: "Saad",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    {
      title: "Build AI BG Removal SaaS App in React JS",
      author: "Richard James",
      rating: 4.5,
      noOfRatings: 122,
      price: 15.99,
      image:
        "/imgs/How to Create Text To Image Generator Full Stack SAAS app using React JS 1 (1).png",
    },
    ];
    
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredItems, setFilteredItems] = useState(allCourses)

    // reset the filter when search input is cleared
    useEffect(() => {
        if (searchTerm === '') {
            // show all cards when there is not search term
            setFilteredItems(allCourses)
        }
    },[searchTerm,allCourses])


    const searchFilterer = () => {
        const searched = allCourses.filter((value) => 
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredItems(searched)
    }
  return (
    <>
      {/* navbar */}
      <Navbar />
      <Box sx={{ marginTop: "40px" }} className="allCourses container">
        {/* cards head & search */}
        <Box className="d-flex flex-wrap align-items-center justify-content-between">
          <Box>
            <Box>
              <Typography className="fs-30 mt-3 fw-semibold" variant="p">
                Courses List
              </Typography>
            </Box>
            <Box
              className="fs-15 d-flex align-items-center gap-2"
              sx={{ marginTop: "-5px" }}
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "active text-decoration-none"
                    : "text-decoration-none"
                }
              >
                <Typography className="" variant="p">
                  Home
                </Typography>
              </NavLink>

              <Typography>/</Typography>

              <Typography>Courses List</Typography>
            </Box>
          </Box>
          {/* Search box */}
          <Box
            sx={{
              display: "flex",
              mt: 3,
            }}
          >
            <TextField
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              fullWidth
              placeholder="Search any courses"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1px solid #6B728033",
                  },
                  "&:hover fieldset": {
                    border: "1px solid #6B728033",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #6B728033",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: "action.active", mr: 1 }} />
                ),
                sx: {
                  height: 40,
                  marginRight: "170px",
                  borderRadius: "5px 0 0 5px",
                },
              }}
            />
            <Button
              onClick={searchFilterer}
              variant="contained"
              sx={{
                height: 40,
                paddingX: "50px",
                whiteSpace: "nowrap",
                borderRadius: "0 5px 5px 0",
                fontSize: "15px",
                textTransform: "capitalize",
                backgroundColor: "#2563EB",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },

                // On focus: no outline, no border glow
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },

                // On active (click/press): no visual push effect
                "&:active": {
                  boxShadow: "none",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
        {/* all courses cards */}
        <Box sx={{ marginTop: "40px" }} className="courseCards">
          <Grid container spacing={2}>
            {filteredItems.map((items) => {
              return (
                <Grid
                  sx={{ borderRadius: "8px" }}
                  className="border bg-white"
                  item
                  size={{ xs: 12, sm: 6, lg: 3, xl: 2 }}
                >
                  <CardMedia
                    sx={{ overflow: "hidden" }}
                    className="img-fluid"
                    component="img"
                    image={items.image}
                    alt="Paella dish"
                  />
                  <Box className="d-flex flex-column gap-1 px-2 py-1">
                    <Typography className="fw-bold fs-15" variant="h6">
                      {items.title}
                    </Typography>
                    <Typography className="fs-13 text-span-2" variant="span">
                      {items.author}
                    </Typography>
                    {/* Rating Component */}
                    <Box className="d-flex align-items-center gap-2">
                      <Typography className="fs-13 fw-medium" variant="span">
                        {items.rating}
                      </Typography>
                      <Rating
                        className="text-red"
                        size="small"
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      />
                      <Typography className="fs-13 text-span" variant="span">
                        {items.noOfRatings}
                      </Typography>
                    </Box>
                    <Typography className="fs-16 fw-bold" variant="h6">
                      {items.price}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box className="text-center mt-5">
            <Button
              variant="contained"
              sx={{
                height: 40,
                paddingX: "30px",
                whiteSpace: "nowrap",
                border: "1px solid #8A8C8F",
                borderRadius: "5px",
                fontSize: "15px",
                textTransform: "unset",
                background: "none",
                boxShadow: "none",
                color: "#8A8C8F",
                "&:hover": {
                  boxShadow: "none",
                },

                // On focus: no outline, no border glow
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },

                // On active (click/press): no visual push effect
                "&:active": {
                  boxShadow: "none",
                },
              }}
            >
              Load more
            </Button>
          </Box>
        </Box>
      </Box>
      {/* footer */}
      <Footer />
    </>
  );
};

export default AllCourses;
