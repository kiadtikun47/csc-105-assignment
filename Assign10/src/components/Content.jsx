import { CardMedia, Typography, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";

export const Content = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={2}
      >
        <Grid item>
          <Box>
            <Typography variant="h4" sx={{ marginBottom: 1 }}>
              Welcome to My Website
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Spider-Man is a superhero appearing in American comic books
              published by Marvel Comics. Created by writer-editor Stan Lee and
              artist Steve Ditko, he first appeared in the anthology comic book
              Amazing Fantasy #15 (August 1962) in the Silver Age of Comic
              Books. He has been featured in comic books, television shows,
              films, video games, novels, and plays.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Spider-Man's secret identity is Peter Parker, a teenage high
              school student and an orphan raised by his Aunt May and Uncle Ben
              in New York City after his parents Richard and Mary Parker died in
              a plane crash. Lee and Ditko had the character deal with the
              struggles of adolescence and financial issues and gave him many
              supporting characters
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.vox-cdn.com/thumbor/srvUfuN4puLdghOQYwZ6If3pT1I=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg"
                  alt="view image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    spider man tom holland
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Holland achieved international recognition playing
                    Spider-Man/Peter Parker in six Marvel Cinematic Universe
                    (MCU) superhero films, beginning with Captain America: Civil
                    War (2016).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={6} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://media.glamour.com/photos/56957ac2085ae0a85036bf72/master/w_1600%2Cc_limit/entertainment-2012-05-0510-andrew-garfield-spider-man_aw.jpg"
                  alt="black image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    spider man andrew garfield
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Andrew Garfield as Peter Parker / Spider-Man: A
                    intellectually-gifted yet socially-introverted teenager
                    struggling to find his place in life ever since his parents
                    died when he was a child.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={6} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/06/04/Pictures/spiderman-3-2007_4e232eb0-a640-11ea-ad77-c76040589f9e.jpg"
                  alt="colorful image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    spider man tobey maguire
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tobey Maguire as Peter Parker / Spider-Man: An
                    academically-gifted high school student who is socially
                    inept. After a genetically engineered spider bites him, he
                    gains spider-like powers, including super-strength, enhanced
                    reflexes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
