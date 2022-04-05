const formatListFavoris = (data) => {
    let favoriteList = []
    data?.forEach(favoris => { favoriteList.push(favoris.gifts[0]) })
    return favoriteList
  }

  export default formatListFavoris;
  