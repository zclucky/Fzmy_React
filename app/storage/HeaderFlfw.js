const HeaderFlfw = {
  title: '法律服务',
  link: '#title-link',
  data: {},
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav,e.target);
    // do something
  }
};
export default HeaderFlfw;