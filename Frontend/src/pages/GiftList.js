import React,{useState,useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from './../utils/api'
import {getAllGifts} from './../services/giftServices/getAllGifts'
import { Modal } from 'antd';



const GiftList = (props) => {

    const [giftList, setGiftList] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [currentGift, setCurrentGift] = useState([]);
    

    useEffect(async () => {
      const result = await getAllGifts ();
         setGiftList (result.data);
    }, []);


   
   console.log("id",currentGift.id)

  return (
     <>
     <h1>Gift List</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {giftList.map((item) => {
        console.log('items', item.Img[0]);
                  return (
                    
                    
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          
          <img src={`http://localhost:1337${item?.Img[0]?.formats?.thumbnail?.url}`} />
          <p>{`http://localhost:1337${item?.Img[0]?.formats?.thumbnail?.url}`}</p>
          {/* <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"/> */}
        </ListItemAvatar>
        
        <ListItemText
          primary={item?.Name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
            </React.Fragment>
          }
          
        />
        <div>
       
            <button>Details</button>
        </div>
      </ListItem>
       )})}

    </List>

    </>
  )
}

export default GiftList