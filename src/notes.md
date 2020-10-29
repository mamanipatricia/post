Removing Interceptors
You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call eject with that reference as an argument, to remove it (more info: https://github.com/axios/axios#interceptors):

```javascript=
var myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```
