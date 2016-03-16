const HeaderPfjy = {
  title: '普法教育',
  link: '#title-link',
  data: {},
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav,e.target);
    // do something
  }
};
export default HeaderPfjy;