# Fzmy_React
法治绵阳React改版项目
#基础功能构建   3.16


#请求数据接口
	
	1.查询法制新闻详情
		url: /law/App/mediaMa/AppMediaContent.action
		参数传递:id
	
	2.根据传入的文本进行模糊查询
		url: /law/App/mediaMa/AppSearchMedia.action
		参数传递: search(内容)，offset，limit

	3.查菜单列表(法制动态)
		url: /law/App/Law/getLawMenus.action
		参数传递:无

	4.查新闻列表
		url: /law/App/Law/getLawNews.action
		参数传递: limit,offset,menuid,

	5.查新闻详情列表
		url: /law/App/Law/getLawNewsDet.action
		参数传递:id

	6.查菜单列表(法律服务)
		url: /law/App/Ser/getServiceMenus.action
		参数传递:无
	
	7.查人员详情
		url: /law/App/Ser/getServiceStaffDet.action
		参数传递:id
	
	12.查机构列表
		url: /law/App/Ser/getOrgs.action
		参数传递：limit，offset，menuid，tagid
	
	8.查机构详情
		url: /law/App/Ser/getOrgDetail.action
		参数传递:id
	
	9.用户登录
		url：/law/App/User/login.action
		参数传递：username,psw
	
	10.isLogin
		url：/law/App/User/isLogin.action
		参数传递:无

	11.用户登出
		url: /law/App/User/logout.action
		参数传递：无
	
	12.用户注册
		url: /law/App/User/register.action
		参数传递:username,psw,tel,email
		成功返回true，失败返回false
	
	13.导航条
		url: /law/App/Navs/getNavs.action
		参数传递:无
	
