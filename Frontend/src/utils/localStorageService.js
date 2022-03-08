const LocalStorageService = (
    function () {

        const _setToken = (accessToken) => {
            localStorage.setItem("TOKEN", accessToken);
        }
        const _getAccessToken = () => {
            return localStorage.getItem("TOKEN");
        }



        const _clearToken = () => {
            localStorage.removeItem("TOKEN");
        }
        const _getUserName = () => {
            return localStorage.getItem("USER_NAME");
        }

  
       const _setUserName = (userName) => {
            localStorage.setItem("USER_NAME", userName);
        }

      

        const _clearUserName = () => {
            localStorage.removeItem("USER_NAME");
        }

    
        return {
            setToken: _setToken,
            getAccessToken:_getAccessToken,
            clearToken:_clearToken,
            setUserName:_setUserName,
            getUserName:_getUserName,
            clearUserName:_clearUserName,

        };
    })();
export default LocalStorageService;