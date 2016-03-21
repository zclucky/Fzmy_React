const titleStorage=localStorage.getItem('userDetail')||'未登录';
const HeaderData = {
  title: '法治绵阳',
  link: '#title-link',
  data: {
    left: [
      {
        link: '#left-link',
        title:titleStorage,
      }
    ],
    right: [
      {
        link: '#right-link',
        icon: 'bell',
      }
    ]
  },
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav,e.target);
    let router = this._reactInternalInstance._context.router;
    router.replace(nav.link);
  }
};
export default HeaderData;