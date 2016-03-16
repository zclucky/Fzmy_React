const HeaderPfwh = {
  title: '普法文化',
  link: '#title-link',
  data: {},
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav,e.target);
    // do something
  }
};
export default HeaderPfwh;