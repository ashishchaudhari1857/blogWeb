const db =require('../database/database')


class Blogs {
  constructor() {
    this.count = 1;
    this.blogs = [];
  }

  save(title, content) {


   let id= this.count++;
   

    // console.log("d", this.blogs);
    // this.blogs.push(post);

    return  db.execute('insert into blog (id ,title ,content) values( ? ,? , ?)',
    [id ,title ,content]
    );
    
  }

  fetchdata() {
//  db.execute("select*from blog").then((result)=>console.log(result)).catch((err)=>console.log(err));

    console.log("this data", this.blogs);
    return this.blogs;
    
  }

  getitem(id) {
    // const item = this.blogs?.find((item) => id == item.id);
    return db.execute (
      'select * from blog where id=?',[id]
    );
  }
}

module.exports = Blogs;
