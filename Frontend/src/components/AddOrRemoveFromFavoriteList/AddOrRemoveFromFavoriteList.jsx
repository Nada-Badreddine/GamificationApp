import React, { memo } from 'react';
import { useMutation } from '@apollo/client'
import { CREATE_FAVORIS_MUTATION } from '../../services/favorisServices/MutationFavoris'
import { DELETE_FAVORIS_MUTATION } from '../../services/favorisServices/MutationFavoris'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

function AddOrRemoveFromFavoriteList({ gift, listFav, refetch }) {
    const userConecte = localStorage.getItem("USER_ID");
    const [deleteFavoris] = useMutation(DELETE_FAVORIS_MUTATION)
    const [createFavoris] = useMutation(CREATE_FAVORIS_MUTATION)

    const AddToFavoris = () => {
        createFavoris(
            {
                variables: {
                    input: { data: { gifts: gift.id, users_permissions_users: userConecte } },
                }
            }
        )
        refetch()
    }


    const ExistingFavorite = listFav?.find((elem) => {
        return elem?.id === gift?.id;
    });

    return (
        <>
            {ExistingFavorite ?
                <IconButton aria-label="add to favorites"
                    onClick={
                        () => {
                            deleteFavoris(
                                {
                                    variables: { where: { "id": gift?.id } },

                                }
                            )
                            refetch()
                        }
                    }
                >
                    <FavoriteIcon sx={{ color: red[500] }} />
                </IconButton>
                :
                <IconButton aria-label="add to favorites" onClick={() => AddToFavoris()} >
                    <FavoriteIcon color="disabled" />
                </IconButton>
            }

        </>
    );
}

export default memo(AddOrRemoveFromFavoriteList);