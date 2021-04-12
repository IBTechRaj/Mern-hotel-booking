export const showMessage = (req, res) => {
  res.status(200).send(`your message:  ${req.params.message}`)
}
