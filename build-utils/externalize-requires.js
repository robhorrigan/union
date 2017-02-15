module.exports = function externalizeRequires(values) {
  return (context, request, callback) => {
    const shouldBeExternal = values.some((value) => {
      if (typeof value === 'string') {
        return request === value;
      }

      // Assume regex if not string
      return value.test(request);
    });

    if (shouldBeExternal) {
      callback(null, request);
    } else {
      callback();
    }
  };
};
