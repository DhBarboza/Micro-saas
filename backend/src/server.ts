import app from './app';
import database from './database';

database.sync();
console.log('Database running at 3306')

app.listen(8000)
console.log("Server running at port: 8000");