var fs = require('fs')

var file = fs.readFileSync('/etc/services', 'utf8')

var services = module.exports = {}

file.split('\n').forEach(function (line) {
  var split = line.split(' ').filter(Boolean)
  var proto = split[0]
  var port = split[1]

  if (services[proto]) services[proto].push(port)
  else services[proto] = [port]
})
