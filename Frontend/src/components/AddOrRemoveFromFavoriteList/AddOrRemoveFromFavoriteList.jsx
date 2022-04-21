import React, { memo } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { CREATE_FAVORIS_MUTATION } from '../../services/favorisServices/MutationFavoris';
import { DELETE_FAVORIS_MUTATION } from '../../services/favorisServices/MutationFavoris';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { common, grey } from '@mui/material/colors';
import { LOAD_FAVORIS_BY_USER_ID } from '../../services/favorisServices/QueryFavoris';
function AddOrRemoveFromFavoriteList({ gift, listFav, refetch }) {
  const userConecte = localStorage.getItem('USER_ID');
  const [deleteFavoris] = useMutation(DELETE_FAVORIS_MUTATION);
  const [createFavoris] = useMutation(CREATE_FAVORIS_MUTATION);

  const AddToFavoris = () => {
    createFavoris({
      variables: {
        input: {
          data: { gifts: gift.id, users_permissions_users: userConecte },
        },
      },
    });
    refetch();
  };

  const ExistingFavorite = listFav?.find((elem) => {
    return elem?.id === gift?.id;
  });


  const { loading: loadingFavoris, data: dataFavoris } = useQuery(
    LOAD_FAVORIS_BY_USER_ID,
    { variables: { id: userConecte } }
  );
  const x = dataFavoris?.user?.favorises.map((n) => n?.id);
  return (
    <>
      {ExistingFavorite ? (
        <IconButton
          aria-label="add to favorites"





          onClick={() => {
            deleteFavoris({input:{where:{ id :19}}});
            
            
            
           
          }}
          
           
        >
          <FavoriteIcon sx={{ color: common['black'] }} />
        </IconButton>
      ) : (
        <IconButton
          aria-label="add to favorites"
          onClick={() => AddToFavoris()}
        >
          <FavoriteIcon sx={{ color: grey[300] }} />
        </IconButton>
      )}
    </>
  );
}

export default memo(AddOrRemoveFromFavoriteList);
