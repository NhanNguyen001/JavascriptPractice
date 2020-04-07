const annoyer = {
  phrases: [
    'literally',
    'cray cray',
    "I can't",
    'Totes!',
    'YOLO',
    "Can't Stop, Won't Stop"
  ],

  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    console.log(idx);
    return phrases[idx];
  },

  start() {
    // console.log(this.pickPhrase);
    // const that = this;
    this.timerId = setInterval(() => {
      console.log(this);
      console.log(this.pickPhrase());
    }, 3000);
  },

  stop() {
    clearInterval(this.timerId);
  }
};

annoyer.start();
 