// foto-archiv.html
new Vue({
  el: '#foto-archiv',
  data() {
    return {
      url: null,
      // postUrl: 'http://localhost:8888/squares36/wp-json/wp/v2/laminate?per_page=100',
      postArray: [
        {
          id: 1,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item1.jpg',
          imageDownload: 'assets/img/foto-archiv/item1.jpg',
          filterPost: ['Все', 'Для СМИ'],
          opacity: false
        },
        {
          id: 2,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item2.jpg',
          imageDownload: 'assets/img/foto-archiv/item2.jpg',
          filterPost: ['Все', 'Портфолио'],
          opacity: false
        },
        {
          id: 3,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item3.jpg',
          imageDownload: 'assets/img/foto-archiv/item3.jpg',
          filterPost: ['Все', 'Фотопробы'],
          opacity: false
        },
        {
          id: 4,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item4.jpg',
          imageDownload: 'assets/img/foto-archiv/item4.jpg',
          filterPost: ['Все', 'Галерея образов'],
          opacity: false
        },
        {
          id: 5,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item5.jpg',
          imageDownload: 'assets/img/foto-archiv/item5.jpg',
          filterPost: ['Все', 'Портреты'],
          opacity: false
        },
        {
          id: 6,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item6.jpg',
          imageDownload: 'assets/img/foto-archiv/item6.jpg',
          filterPost: ['Все', 'С друзьями и колегами'],
          opacity: false
        },
        {
          id: 7,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item7.jpg',
          imageDownload: 'assets/img/foto-archiv/item7.jpg',
          filterPost: ['Все', 'Личный архив'],
          opacity: false
        },
        {
          id: 8,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item8.jpg',
          imageDownload: 'assets/img/foto-archiv/item8.jpg',
          filterPost: ['Все', 'Мероприятия'],
          opacity: false
        },
        {
          id: 9,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item9.jpg',
          imageDownload: 'assets/img/foto-archiv/item9.jpg',
          filterPost: ['Все', 'Для СМИ'],
          opacity: false
        },
        {
          id: 10,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item10.jpg',
          imageDownload: 'assets/img/foto-archiv/item10.jpg',
          filterPost: ['Все', 'Портфолио'],
          opacity: false
        },
        {
          id: 11,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item11.jpg',
          imageDownload: 'assets/img/foto-archiv/item11.jpg',
          filterPost: ['Все', 'Фотопробы'],
          opacity: false
        },
        {
          id: 12,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item12.jpg',
          imageDownload: 'assets/img/foto-archiv/item12.jpg',
          filterPost: ['Все', 'Галерея образов'],
          opacity: false
        },
        {
          id: 13,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item13.jpg',
          imageDownload: 'assets/img/foto-archiv/item13.jpg',
          filterPost: ['Все', 'Портреты'],
          opacity: false
        },
        {
          id: 14,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item14.jpg',
          imageDownload: 'assets/img/foto-archiv/item14.jpg',
          filterPost: ['Все', 'С друзьями и колегами'],
          opacity: false
        },
        {
          id: 15,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item15.jpg',
          imageDownload: 'assets/img/foto-archiv/item15.jpg',
          filterPost: ['Все', 'Личный архив'],
          opacity: false
        },
        {
          id: 16,
          title: '"1612" <br/>Роль - Генуэзец <br/>Фотограф - Сергей Коротков',
          image: 'assets/img/foto-archiv/item16.jpg',
          imageDownload: 'assets/img/foto-archiv/item16.jpg',
          filterPost: ['Все', 'Мероприятия'],
          opacity: false
        },
      ],
      posts: [],
      archivFilter: [
        {
          id: 1,
          title: 'Все',
          active: true
        },
        {
          id: 2,
          title: 'Для СМИ',
          active: false
        },
        {
          id: 3,
          title: 'Портфолио',
          active: false
        },
        {
          id: 4,
          title: 'Фотопробы',
          active: false
        },
        {
          id: 5,
          title: 'Галерея образов',
          active: false
        },
        {
          id: 6,
          title: 'Портреты',
          active: false
        },
        {
          id: 7,
          title: 'С друзьями и колегами',
          active: false
        },
        {
          id: 8,
          title: 'Личный архив',
          active: false
        },
        {
          id: 9,
          title: 'Мероприятия',
          active: false
        },
      ],
      tabActive: true
    }
  },
  computed: {
    // 
  },
  mounted() {
    this.posts = this.postArray
    // this.getPostsDoor();

    // setTimeout(() => { this.mainPageFilterNew() }, 2000);
  },
  methods: {
    async getPosts() {
      return await axios
        .get(this.postUrlLaminate)
        .then((res) => {

          this.laminate = res.data.map(post => ({
            title: post.title.rendered,
            link: post.link,
            // acf: post.acf,
            // карточка
            verticalImageOne: post.acf.laminate_vertical_image_one,
            verticalImageTwo: post.acf.laminate_vertical_image_two,
            verticalImageThree: post.acf.laminate_vertical_image_three,
            laminateStatus: post.acf.laminate_status,
            laminateSmalText: post.acf.laminate_smal_text,
            laminatePriceOne: post.acf.laminate_price_one,
            laminatePriceTwo: post.acf.laminate_price_two,
            icons: post.acf.laminate_icons,
            // фильтр
            brandLaminate: post.acf.laminate_filter_brand,
            loadLaminate: post.acf.laminate_filter_load,
            chamferLaminate: post.acf.laminate_filter_chamfer,
            thicknessLaminate: post.acf.laminate_filter_thickness,
            countryLaminate: post.acf.laminate_filter_country,
            priceLaminate: post.acf.laminate_filter_price,
            offersLaminate: post.acf.laminate_filter_offers,
            filterNew: post.acf.filter_new,
            filterShares: post.acf.filter_shares,
            filterBestsellers: post.acf.filter_bestsellers,
          }));

          this.laminatePosts = this.laminate;
          this.laminateFilterPosts = this.laminate;

        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterFotoArchiv(id, title) {
      this.posts = []

      this.archivFilter.filter(key => {
        if (id !== key.id) {
          key.active = false
        } else {
          console.log(key.id);
          key.active = true
        }
      })


      this.postArray.filter(item => {
        item.filterPost.forEach(element => {
          if (element == title) {
            item.opacity = true
            this.posts.push(item)
          } else {
            item.opacity = false
          }
        })
      })
      console.log(this.posts)
    },
    // postTime() {
    //   setTimeout(() => {
    //     return true
    //   }, 2000);
    // },
    plusLaminate() {
      this.plusLaminatePosts += 3;
      if (this.plusLaminatePosts >= this.laminatePosts.length) {
        this.showMoreLaminate = false;
      }
    },
  },
  filters: {
    trimSpace(value) {
      // Делаем пробел после первого символа
      let n = value.toString();
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    },
  }
});

