const app = new Vue({
  el: '#app',

  data: {
    messaggio:'Ciaone',
    immagine:'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg',
    flag: true,
  },
  
  methods: {
    cambioImmagine(){
      if(this.flag){
       this.immagine = 'https://img-9gag-fun.9cache.com/photo/an44oR5_460s.jpg';
      }else
      {
        this.immagine = 'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg';
       }
       this.flag = !this.flag;
    }
  },
  
});