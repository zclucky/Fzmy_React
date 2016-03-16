const HeaderData = {
  title: '法治绵阳',
  link: '#title-link',
  data: {
    left: [
      {
        link: '#left-link',
        title:'未登录',
        icon: 'user'
      }
    ],
    right: [
      {
        link: '#right-link',
        icon: 'bell'
      }
    ]
  },
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav,e.target);
    // do something
  }
};
export default HeaderData;