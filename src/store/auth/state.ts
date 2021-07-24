export interface AUser {
    id?: string;
    fullName: string;
    username: string;
    type: string
  } 
  export interface IAuthState {
    currentUser?: AUser;
  }
  
  function state(): IAuthState {
    return {
      currentUser: undefined
    };
  }
  
  export default state;