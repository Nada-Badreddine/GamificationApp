const formatListFavoris = (data) => {
    let favoriteList = [] 
    data?.forEach(favoris => { favoriteList.push({...favoris.gifts[0], favId: favoris.id}) })
    return favoriteList
  }

  export default formatListFavoris;
  