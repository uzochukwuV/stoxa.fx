export const userLoggedIn =()=>{
    var user = window.localStorage.getItem('user');
    alert(user)
    if (user !== null && user?.res?.token){
      return true;
    }
    return false;
  }