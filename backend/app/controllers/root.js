const homepage = async (req, rep) => {
  rep.send({ status: 'OK' })
}

module.exports = {
  homepage
}
