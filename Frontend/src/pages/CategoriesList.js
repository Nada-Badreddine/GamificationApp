import React,{useState,useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from './../utils/api'
import {getAllCategories} from './../services/categoriesServices/getAllCategories'

import { Modal } from 'antd';




const CategoriesList = (props) => {

    const [categoriesList, setCategoriesList] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [currentCategory, setCurrentCategory] = useState([]);

    useEffect(async () => {
      const result = await getAllCategories ();
      setCategoriesList (result.data);
    }, []);


  return (
     <>
     <h1> Des récompenses pour chaque occasion</h1>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {categoriesList.map((item) => {
                  return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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

export default CategoriesList