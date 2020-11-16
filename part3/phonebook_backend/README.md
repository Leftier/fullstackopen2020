# Part3 backend

Heroku app URL: https://fast-bayou-33434.herokuapp.com/

As the backend is contained in a mono repo we need to execute the following commands in order to deploy the backend to heroku:

```console
$ heroku login
$ heroku create
$ cd fullstackopen2020 #(cd to root of repository)
$ git remote add heroku url_to_heroku_app
$ git subtree push --prefix "part3/phonebook_backend" heroku master
```







