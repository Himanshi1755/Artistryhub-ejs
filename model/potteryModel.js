import pool from "../db/dbConfig.js";
class Pottery{
    constructor( id,  title,  artist,  year, style, image, thumbnail, description, medium,  price, dimensions,  location, availability,  rating, tags) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.style = style;
        this.image = image;
        this.thumbnail = thumbnail;
        this.description = description;
        this.medium = medium;
        this.price = price;
        this.dimensions = dimensions;
        this.location = location;
        this.availability = availability;
        this.rating = rating;
        this.tags = tags;
    }

       static createP(pottery) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = `insert into pottery(id, title, artist, year, style, image, thumbnail, description,medium, price, dimensions, location, availability, rating, tags) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    con.query(sql, [pottery.id, pottery.title, pottery.artist,pottery.year,pottery.style,pottery.image,pottery.thumbnail,pottery.description,pottery.medium,pottery.price, JSON.stringify(pottery.dimensions),pottery.location,pottery.availability,pottery.rating,JSON.stringify(pottery.tags)], (err, result) => {
                        con.release();
                        err ? reject(err) : resolve(result);
                    });
                }
                else reject(err);
            })
        });
    }

    static getAllP(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               let sql = "select * from pottery";
               con.query(sql,(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               })
            });
        });
    }


}

export default Pottery;