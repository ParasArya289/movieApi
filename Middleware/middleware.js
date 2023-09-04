const loggerMiddleWare = (_, __, next) => {
  console.log("Incoming request at:", new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone:"Asia/Kolkata",
  }).format(new Date))
  next()
}
module.exports = {loggerMiddleWare}