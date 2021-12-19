import formidable from "formidable";
const form = formidable({ multiples: true }); // multiples means req.files will be an array

export default async function parseMultipartForm(req, res, next) {
  form.parse(req, (err, fields, files) => {
    if (!err) {
      req.body = fields; // sets the body field in the request object
      req.files = files; // sets the files field in the request object
    }
    next(); // continues to the next middleware or to the route
  });
}
