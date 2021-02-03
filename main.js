import Header from './components/header/header.js'
import Post from './components/post/post.js'
import News from './components/news/news.js'
import Banner from './components/banner/banner.js'
import Featured from './components/featured/featured.js'
import Features from './components/features/features.js'
import Editor from 'https://vue-pagebuilder.vercel.app/editor/editor.js' // example of loading the editor externally

const {
  createApp
} = Vue
const App = createApp({
  data() {
    return {
      editing: true,
      layouts: ['banner', 'post', 'news', 'featured', 'features'],
      entries: [{
          id: "item-1",
          layout: "banner",
          title: "Sitefiction",
          subtitle: "Lorem ipsum dolor site amet.",
          button_text: "Contact Us",
          button_link: "#",
          icon: "fas fa-crown"
        },
        {
          id: "item-2",
          layout: "post",
          title: "Mauris eleifend ligula",
          body: " Vivamus in nisi commodo, auctor magna vel, viverra turpis. Quisque dapibus risus nec justo euismod, id fringilla dui lobortis. Mauris vitae semper arcu. Ut ac lorem felis."
        },
        {
          id: "item-3",
          layout: "news",
          title: "Maecenas tincidunt sem quis rutrum",
          body: "Mauris in porttitor elit. Aenean elementum eleifend quam, in tristique eros auctor porta. Donec et est in tellus blandit feugiat id nec nunc."
        },
        {
          id: "item-4",
          layout: "features",
          title: "Lorem Ipsum",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis."
        }
      ],
    }
  },

  methods: {
    defaultVal(key, def){
      if(key==''){
        return def;
      }else{
        return key;
      }
    }
  },

  components: {
    'app-header': Header,
    'wdgt-post': Post,
    'wdgt-banner': Banner,
    'wdgt-news': News,
    'wdgt-featured': Featured,
    'wdgt-features': Features,
    'page-editor': Editor,
  },
});

window.addEventListener('load', () => {
  App.mount('main')
})
