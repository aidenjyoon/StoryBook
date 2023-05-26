app to create private and public stories.

---- dependencies ----

- mongoose: to interact with mongodb database

- connect-mongo: allow us to store sessions in database. Helps us stay logged in even after server is resetted.

- express-session: sessions and cookies

- express-handlebars: template engine (alt: ejs. can also use react and output json )

- dotenv: config. can put env variables

- method-override: put and delete requests from template. since by default only get and put

- moment: date

- morgan: for logging - logs information about incoming HTTP requests and HTTP responses

- passport: for authentication

- passport-google-oauth20: google oauth2.0

---- dev dependencies ----

- nodemon: continuously watch server so we don't have to restart everytime we make a change.

- cross-env: to put env variables inside start and dev scripts
