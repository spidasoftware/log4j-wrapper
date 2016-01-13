var log4j = require("../log4j-wrapper")

describe("stacktrace", function () {
  it("should contain the line of the caller", function () {
    var call = log4j.getCaller();
    expect(call.indexOf("log4j-wrapper-spec.js:5")>0).toBe(true);
  });
});
