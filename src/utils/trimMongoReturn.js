const trimMongoReturn = (obj) => {
  const trimmed = {...obj};
  delete trimmed['_id'];
  delete trimmed['__v'];
  return trimmed;
};

module.exports.trimMongoReturn = trimMongoReturn;
