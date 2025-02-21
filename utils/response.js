let responseFunction = (res, data, statusCode) => {
  if (data) {
    res
      .status(statusCode ? statusCode : 200)
      .json({ status: "Succes", data: data });
  } else {
    res.status(404).json({ status: "Fail" });
  }
};

module.exports = responseFunction;
