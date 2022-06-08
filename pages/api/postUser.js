const postUser = (req, res) => {
  const body = req.body

  console.log(body);

  if (!body.email) {
    return res.status(400).json({data: 'First or last name not found'})
  }

  res.status(200).json({data: `${body.email}`})
}
 
export default postUser;