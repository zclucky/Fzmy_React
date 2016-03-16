const HeaderFzdt = {
  title: '法治动态',
  link: '#title-link',
  data: {},
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav,e.target);
    // do something
  }
};
export default HeaderFzdt;