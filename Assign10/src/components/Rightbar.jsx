import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Rightbar() {
  return (
    <Box direction={"column"} sx={{ display: { xs: "none", md: "block" } }}>
      <Box display={"flex"} flexDirection={"column"} mt={2}>
        <Typography>Lastest Photos</Typography>
        <ImageList sx={{ width: 250, height: 250 }} cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
                srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45817/article_full%403x.jpg",
    title: "404 not found",
  },
  {
    img: "https://filmdaily.co/wp-content/uploads/2022/01/Spider-06-1.jpeg",
    title: "404 not found",
  },
  {
    img: "https://thestandard.co/wp-content/uploads/2017/07/Spider-Man-Homecoming_cover_.jpg",
    title: "404 not found",
  },
  {
    img: "https://s.isanook.com/mv/0/ud/9/47573/00.jpg",
    title: "404 not found",
  },
];
export default Rightbar;
