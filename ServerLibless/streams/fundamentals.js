// process.stdin.pipe(process.stdout);

import { Readable, Writable, Transform } from "stream";

class OneHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(i.toString());

        this.push(buf);
      }
    }, 300);
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(parseInt(chunk.toString()) * 10);
    callback();
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = parseInt(chunk.toString()) * -1;

    callback(null, Buffer.from(transformed.toString()));
  }
}

new OneHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
