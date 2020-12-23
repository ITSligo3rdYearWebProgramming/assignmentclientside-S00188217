import { UserService } from '../user.service';
import { environment } from '../../environments/environment';

export function appInitializer(userService: UserService) {
    return () => new Promise(resolve => {
        window['fbAsyncInit'] = function () {
            FB.init({
                appId: environment.facebookAppID,
                cookie: true,
                xfbml: true,
                version: 'v8.0'
            });

            FB.getLoginStatus(({authResponse}) => {
                if (authResponse) {
                    userService.apiAuthenticate(authResponse.accessToken)
                        .subscribe()
                        .add(resolve);
                } else {
                    //resolve();
                }
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));    
    });
}

