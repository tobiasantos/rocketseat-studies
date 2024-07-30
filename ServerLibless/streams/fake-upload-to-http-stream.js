import { Readable } from "stream";

class OneHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 15) {
        this.push(null);
      } else {
        const buf = Buffer.from(i.toString());

        this.push(buf);
      }
    }, 300);
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneHundredStream(),
  duplex: "half",
})
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    console.log(data);
  });
