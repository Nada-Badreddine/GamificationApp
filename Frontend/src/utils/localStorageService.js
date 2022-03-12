const LocalStorageService = (
    function () {

        const _setToken = (accessToken) => {
            localStorage.setItem("TOKEN", accessToken);
        }
        const _getAccessToken = () => {
            return localStorage.getItem("TOKEN");
        }


        const _setUserName = (userName) => {
            localStorage.setItem("USER_NAME", userName);
        }
        const _getUserName = () => {
            return localStorage.getItem("USER_NAME");
        }
        const _setUserId = (id) => {
            localStorage.setItem("USER_ID", id);
        }
        const _getUserId = () => {
            return localStorage.getItem("USER_ID");
        }
       



     
        
        



        const _clearToken = () => {
            localStorage.removeItem("TOKEN");
        }

        const _clearUserName = () => {
            localStorage.removeItem("USER_NAME");
        }
        const _clearUserId = () => {
            localStorage.removeItem("USER_ID");
        }

    
        return {
            setToken: _setToken,
            getAccessToken:_getAccessToken,
            clearToken:_clearToken,
            setUserName:_setUserName,
            getUserId: _getUserId,
            setUserId:_setUserId,
            getUserName:_getUserName,
            clearUserName:_clearUserName,
            clearUserId:_clearUserId,

        };
    })();
export default LocalStorageService;