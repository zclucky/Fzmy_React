const HeaderData = {
  title: 'Amaze UI',
  link: '#title-link',
  data: {
    left: [
      {
        link: '#left-link',
        icon: 'home'
      }
    ],
    right: [
      {
        link: '#right-link',
        icon: 'bars'
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