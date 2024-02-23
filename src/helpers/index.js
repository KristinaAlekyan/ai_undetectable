export const setStorageItemHandler = (key) => () => sessionStorage.setItem(key, key);

export const getUserStorage = () => {
  try {
    if(localStorage.hasOwnProperty("user")){
      const userState = localStorage.getItem('user');
      let userData = JSON.parse(userState)
      return userData.user
    }  
  } catch {
    return null
  }
}

export const calculateWordCount = (text) => {
  if(text){
    const arr = text.split(' ');
    return arr.filter(word => word !== "").length
  }

}

export const  getOffset=(el)=> {
  if(el){
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX+"px",
      top: ((rect.top + window.scrollY)+rect.height)+10+"px"
    };
  }
  
}

export function addUserLocalStorage(key, value) {
  try {
    const existingDataString = localStorage.getItem(key);
    const existingData = existingDataString ? JSON.parse(existingDataString) : {};
    Object.assign(existingData.user, value);
    localStorage.setItem(key, JSON.stringify(existingData));
  } catch (error) {
    console.error("Error updating localStorage:", error);
  }
}