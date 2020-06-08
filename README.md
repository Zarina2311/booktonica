## Booktonica

Full-stack web app displaying a list of books from [Techtonica's curriculum](https://github.com/Techtonica/final-full-stack-assessment-h1-2020).

Special feature: users can leave comments under each book.

The app is written using React.js, Reactstrap, Node.js, Express.js, PostgreSQL.

![Booktonica Demo](https://github.com/Zarina2311/booktonica/raw/master/react-app/public/booktonica-demo.gif)

### Setup Instructions

- `createdb booktonica`
- `psql booktonica < booktonica.sql`
- `cd express-api`
- `npm install`
- `npm start`
- `cd ../react-app`
- `npm install`
- `npm start`

Once both servers are running (Express on port 3001 and React on 3000), open http://localhost:3000 to view the app in the browser.
