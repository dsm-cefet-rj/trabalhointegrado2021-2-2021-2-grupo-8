const { CONNECTION_STRING, PORT, SECRET_KEY } = process.env

module.exports = { 
    connection_string: CONNECTION_STRING,
    port: PORT,
    secretKey: SECRET_KEY
}