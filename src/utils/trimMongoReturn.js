const trimMongoReturn = (obj) => {
  console.log(`TRIM MONGO RETURN INPUT: ${obj}`);
  const trimmed = {...obj};
  delete trimmed['_id'];
  delete trimmed['__v'];
  console.log(`TRIM MONGO RETURN OUTPUT: ${trimmed}`);
  return trimmed;
};

module.exports = trimMongoReturn;
