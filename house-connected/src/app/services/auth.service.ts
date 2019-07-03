export class AuthService {

  isAuth = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
            console.log('singIn successful!');
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    console.log('singOut successful!');
  }

  bonjour(){
    return console.log("bonjour");
  }
}
