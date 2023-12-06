const path = require('path');
const Blogs = require('../model/blog');
const BlogModel = new Blogs();

exports.fetchdata = (req, res) => {
  const data =  BlogModel.fetchdata();
  res.send(data);
};

exports.add_data =  (req, res) => {
  const { title, content } = req.body;
  const d = BlogModel.save(title, content).then(([result ] )=> res.redirect('/')).catch((err)=>console.log(err));
 
 
};

exports.form = (req, res) => {
  // res.send("ashish")
  res.sendFile(path.join(__dirname, '../views/addblog.html'));
};


exports.Blogdetail=(req ,res)=>{
      const id  =req.params.id;
      const data=BlogModel.getitem(id)
      .then(([result])=> res.send(JSON.stringify(result)))
      .catch((err)=>console.log(err));
}
