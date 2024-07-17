import {createServer} from 'node:http';

const server = createServer((req, resp) => {
    console.log('OiOiOiOi')
    resp.write('OI!')
    return resp.end()
})

server.listen(3333)