module.exports = async (next) => {
  try {
    next();
  } catch (error) {}
};
