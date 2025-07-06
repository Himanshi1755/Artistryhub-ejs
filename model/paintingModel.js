import pool from "../db/dbConfig.js";

class Painting {

    constructor(id, title, artist,year, style,image, description, medium, price,dimensions, location, availability, rating, tags) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year=year;
        this.style=style;
        this.image = image;
        this.thumbnail=thumbnail;
        this.description = description;
        this.medium = medium;
        this.price = price;
        this.dimensions=dimensions;
        this.location=location;
        this.availability=availability;
        this.rating=rating;
        this.tags=tags;
    }

    // static create(painting) {
    //     return new Promise((resolve, reject) => {
    //         pool.getConnection((err, con) => {
    //             if (!err) {
    //                 let sql = `insert into paintings(id,  title,  artist,  image,  description,  medium,  price) values (? ,? ,? ,? ,? ,?, ?)`;
    //                 con.query(sql, [painting.id, painting.title, painting.artist,painting.image,painting.description,painting.medium,painting.price,], (err, result) => {
    //                     con.release();
    //                     err ? reject(err) : resolve(result);
    //                 });
    //             }
    //             else reject(err);
    //         })
    //     });
    // }

        static create(painting) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = `insert into paintings(id, title, artist, year, style, image, thumbnail, description, medium, price, dimensions, location, availability, rating, tags) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    con.query(sql, [painting.id, painting.title, painting.artist,painting.year,painting.style,painting.image,painting.thumbnail,painting.description,painting.medium,painting.price, JSON.stringify(painting.dimensions),painting.location,painting.availability,painting.rating,JSON.stringify(painting.tags)], (err, result) => {
                        con.release();
                        err ? reject(err) : resolve(result);
                    });
                }
                else reject(err);
            })
        });
    }
    static getAll(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                 if (err) {
                return reject(err);
            }
               let sql = "select * from paintings";
               con.query(sql,(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               })
            });
        });
    }

  static findById(paintingId){
      return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                 if (err) {
                return reject(err);
            }
               let sql = "select * from paintings where id = ?";
               con.query(sql,[paintingId*1],(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               })
            });
        });
    }
}

export default Painting;

