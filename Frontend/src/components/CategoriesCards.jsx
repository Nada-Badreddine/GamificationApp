
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { useQuery } from '@apollo/client'
// import { LOAD_CATEGORIES } from './../services/categoriesServices/QueryAllCategories'
// import { useNavigate } from 'react-router-dom';
// import Category from './Category';

// function CategoriesCards(props) {
//   const { loading, data } = useQuery(LOAD_CATEGORIES)
//   const navigate = useNavigate();
//   const ApiUrl = 'http://localhost:1337'

//   if (loading) return <Box sx={{ display: 'flex' }}>
//     <CircularProgress />
//   </Box>

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
// ];
//   return (
//     <Box>
//                 <Grid container spacing={4}>

//                 {featuredPosts.map((post) => (
//               <Category key={post.title} post={post} />
//             ))}
//             </Grid>
//       {/* {data?.categories?.map((item) => {
//         return (
//           <Card >
//             <div style={{ display: 'flex' }}>
//               <div style={{ width: '176px' }} >
//                 <img src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url} alt="Logo" />
//               </div>
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {item?.Name}
//                 </Typography>
//                 <h1> {item?.data?.Img[0]?.name}   </h1>
//                 <Typography variant="body2" color="text.secondary">
//                   Lizards are a widespread group of squamate reptiles, with over 6,000
//                   species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </div>
//             <CardActions>
//               <Button size="small" onClick={() => navigate('/giftsbyCategory/' + item?.id)} >See products</Button>
//             </CardActions>
//           </Card>
//         )
//       })} */}
//     </Box>
//   );
// }
// export default CategoriesCards;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useApexInfoStyles } from '@mui-treasury/styles/info/apex';
import { useGraphicBtnStyles } from '@mui-treasury/styles/button/graphic';

import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@apollo/client'
import { LOAD_CATEGORIES } from './../services/categoriesServices/QueryAllCategories'

const ApiUrl = 'http://localhost:1337'

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    transition: '0.3s',
    position: 'relative',
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      backgroundColor: '#d9daf1',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '&:before': {
        bottom: -6,
      },
      '& $card': {
        boxShadow: '-12px 12px 64px 0 #bcc3d6',
      },
    },
  },
  card: {
    zIndex: 1,
    position: 'relative',
    borderRadius: '1rem',
    boxShadow: '0 6px 20px 0 #dbdbe8',
    backgroundColor: '#fff',
    transition: '0.4s',
    height: '100%',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: '0.75rem',
  },
  avatar: {
    fontFamily: 'Ubuntu',
    fontSize: '0.875rem',
    backgroundColor: '#6d7efc',
  },
  join: {
    background: 'linear-gradient(to top, #638ef0, #82e7fe)',
    '& > *': {
      textTransform: 'none !important',
    },
  },
}));

const CustomCard = ({
  thumbnail,
  title,
  subtitle,
  description,
  gifts, 
  id
}) => {
  const styles = useStyles();
  const btnStyles = useGraphicBtnStyles();

  return (
    <div className={styles.root}>
      <Column className={styles.card}>
        <Row p={2} gap={2}>
          <Avatar className={styles.logo} variant={'rounded'} src={thumbnail} />
          <Info position={'middle'} useStyles={useApexInfoStyles}>
            <InfoTitle>{title}</InfoTitle>
            <InfoSubtitle>{subtitle}</InfoSubtitle>
          </Info>
        </Row>
        <Box
          pb={1}
          px={2}
          color={'grey.600'}
          fontSize={'0.875rem'}
          fontFamily={'Ubuntu'}
        >
          {description}
        </Box>
        <Row p={2} gap={2} position={'bottom'}>
          <Item>
            <AvatarGroup max={4} classes={{ avatar: styles.avatar }}>
              {gifts.map((giftItem, index) => (
                <Avatar
                  key={index}
                  src={ApiUrl + giftItem?.Img[0]?.formats?.thumbnail?.url}
                />
              ))}
            </AvatarGroup>
          </Item>
          <Item position={'middle-right'}>
            <Button
              className={styles.join}
              classes={btnStyles}
              variant={'contained'}
              color={'primary'}
              disableRipple
              disabled={gifts.length ===0}
              onClick={() => window.location.replace('/giftsbyCategory/' + id)}
            >
              see gifts
            </Button>
          </Item>
        </Row>
      </Column>
    </div>
  );
};

export const TeamCardDemo = React.memo(function TeamCard() {
  const { loading, data } = useQuery(LOAD_CATEGORIES)

  if (loading) return <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>


  return (
    <Box px={2}>
      <Grid container spacing={2}  style={{ width: "100%"}} >
        {data?.categories?.map((item) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <CustomCard
                joined
                gifts={item.gifts}
                thumbnail={
                  ApiUrl + item?.Img[0]?.formats?.thumbnail?.url
                }
                id={item?.id}
                title={item?.Name}
                subtitle={'Created by LoL'}
                description={
                  'You are already a member of this group since April 5th 2019.'
                }
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
});
export default TeamCardDemo