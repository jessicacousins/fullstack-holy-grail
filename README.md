# Holy Grail Fullstack

## Description

The HolyGrail full stack project is a web layout built using modern web technologies. It leverages Docker Desktop for containerization, enabling streamlined deployment and management of the application's components. The project includes React, Express.js, Redis, and ioredis, to create the engaging and dynamic layout. Named after the "Holy Grail" layout pattern, it presents a visually appealing and responsive design that consists of five distinct sections: header, left sidebar, main content area, right sidebar, and footer.

## Dependencies

### Backend:

1. Install the Express server: `npm install express`
2. Then run the container for Docker: `docker run -p 6379:6379 --name some-redis -d redis`
3. Install redis: `npm install redis`
4. Install ioredis: `npm install ioredis`
5. Install cors: `npm install cors`
6. Then use `node key_get_set.js` and `crtl c` to close.
7. Then use `node index.js` which will start the Express.js server on port 3000 within a Docker container.

### Frontend:

1. `npm install superagent`

## Usage

After installing the required dependencies, you can access and interact with the HolyGrail layout through your web browser. The project's frontend and backend run on port 3000, providing a seamless user experience.

## Roadmap of Future Improvement

Improve the Holy Grail layout with more appealing content and styles.

## License Info

[MIT](https://choosealicense.com/licenses/mit/)  
_Copyright (c) 2023 Jessica Cousins_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
