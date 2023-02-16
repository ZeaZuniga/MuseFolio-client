# MuseFolio Introduction

MuseFolio is a browser-based sheet music storage application and pdf reader which empowers musicians through consistent and easy access to their music library. By storing sheet music on an online database, musicians can access their music with only needing a screen and an internet connection.

## Tech Stack Used

For the frontend, MuseFolio used the following:

- HTML
- SCSS
- React.js
- Javascript

For the backend, MuseFolio used the following:

- Node.js
- MySQL
- Knex
- Express.js

## Features

- Immediate access to favorited songs
- Storage of data through custom database
- Ability to edit entries in database
- Multiple user login
- Filter and search for specific songs
- Navigate through PDFs with keyboard, mouse, and tap on mobile

# Usage Instructions

1. Follow the installation instructions below for detailed steps to get set up.

2. Once setup and both server and client are running, either run `npm start` on the client or go to http://localhost:3000 to access MuseFolio

3. To begin, log in with one of the two preloaded users' credentials found in `server/seeds/01_users.js`.

![Login](https://user-images.githubusercontent.com/119464513/219260193-48c32608-fafe-4674-9160-bf2a047fb06d.png)

4. Once logged in, you can either select from the favorited songs on the home page or go to the search page to see a list of all songs.

![Homepage](https://user-images.githubusercontent.com/119464513/219260400-7a06a59f-40b6-49b6-a11d-cd946d8bcb99.png)

5. On the search page, you can either search by song title or by composer, this will bring up any songs that match the input field.

![SearchPage](https://user-images.githubusercontent.com/119464513/219260474-a16e9b7f-89c2-4326-9c92-c1d832770bf2.png)

![SearchResults](https://user-images.githubusercontent.com/119464513/219260486-6d6fd03d-643b-4d50-b85f-829a7a9c9135.png)

6. Clicking (or tapping) on a song card will navigate to the sheet music page where a pdf of the music will be displayed. You can navigate through the pdf in the following ways:

   - Click of tap on either half of the screen (left will go back, right will go forwards)

   - Press the left or right arrow keys on the keyboard to go the corresponding direction

   - Press the spacebar to go forwards

   ![Sheetmusic](https://user-images.githubusercontent.com/119464513/219260504-e3d5e1e6-533e-4202-8e62-fdc23207b6cb.png)

7. Either pressing the edit button on the music page or the edit icon on the song card will take you to the edit form. Here you can edit the song's information, tags, and favorite status and submit it to the database.

![Editpage](https://user-images.githubusercontent.com/119464513/219260523-506a3553-da0a-4bb0-a752-76ad57249621.png)

# Installation Instructions

**Requires Node.js, npm, and MySQL installed before continuing**

- Clone both the [client](https://github.com/ZeaZuniga/MuseFolio-client) and [server](https://github.com/ZeaZuniga/MuseFolio-server) repositories.

```
git clone https://github.com/ZeaZuniga/MuseFolio-client
```

```
git clone https://github.com/ZeaZuniga/MuseFolio-server
```

- Navigate to the directories and run `npm i` to install all dependencies.

```
cd ./server
npm i
```

```
cd ./client/muserfolio-client
npm i
```

### Database Creation

- Using either your terminal or a MySQL GUI, create a new database called `musefolio` by typing

```
 CREATE DATABASE musefolio;
```

- If needed, update the user, password, and database values from `server/knexfile.js`.

### Migrations

- Establish the database tables with

```
npx knex migrate:latest
```

- Populate the databse with seed data

```
npx knex seed:run
```

### Running the Server and Client

- Once the database has been created and populated with seeded data, you can now start the server with

```
node index.js
```

- For the client, all you have to do is run

```
npm start
```

## Lessons Learned

- One lesson I learned was how to think through the user experience. This was important when considering pdf navigation and what would be easiest for musicians to interact with. By understanding that performing musicians need a quick and easy method to turn pages, it guided my solution towards simple answers such as tapping or clicking either side of the screen.

- A second lesson I learned was how important having a written out and clear plan for each day is. Prior to this I would code whatever part I was focusing on for that day, but by taking time before starting, I was able to think through what steps were needed before I could finish other steps. By doing this, the entire process was made much easier.

### Next Steps

- The immediate next step is to launch this on backend and frontend hosting platforms to be able to have this be available to the public.
- The following step would be to add file upload and delete so users can create their own collections of music.
- Along with file upload, I plan to create multiple user signup so users can actually use MuseFolio for their own purposes.
- Beyond this, the plan is to look into ways to scale up this project for a large number of users, and a large amount of files stored.
