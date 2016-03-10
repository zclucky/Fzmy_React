# Fzmy_React
法治绵阳React改版项目
#基础功能构建   3.16


请求数据接口
	1.获取所有菜单  1 2级全部
		url：/law/App/caseMa/AppCaseMenu.action
		参数传递：无

	2.查询menu下的新闻
		url：/law/App/caseMa/AppCaseLise.action
		参数传递: menuid (菜单id),offset,limit(获取数量)
	
	3.新闻详情
		url：/law/App/caseMa/ AppMediaMenu.action
		参数传递:id
	
	4.法制趣闻二级菜单
		url：/law/App/ mediaMa/ AppMediaMenu.action
		参数传递:无

	5.查询法制新闻详情
		url: /law/App/mediaMa/AppMediaContent.action
		参数传递:id
	
	6.根据传入的文本进行模糊查询
		url: /law/App/mediaMa/AppSearchMedia.action
		参数传递: search(内容)，offset，limit

	7.查菜单列表(法制动态)
		url: /law/App/Law/getLawMenus.action
		参数传递:无

	8.查新闻列表
		url: /law/App/Law/getLawNews.action
		参数传递: limit,offset,menuid,

	9.查新闻详情列表
		url: /law/App/Law/ getLawNewsDet.action
		参数传递:id

	10.查菜单列表(法律服务)
		url: /law/App/Ser/getServiceMenus.action
		参数传递:无
	
	11.查人员详情
		url: /law/App/Ser/getServiceStaffDet.action
		参数传递:id
	
	12.查机构列表
		url: /law/App/Ser/getOrgs.action
		参数传递：limit，offset，menuid，tagid
	
	13.查机构详情
		url: /law/App/Ser/ getOrgDetail.action
		参数传递:id
	
	14.用户登录
		url：/law/App/User/login.action
		参数传递：username,psw
	
	15.isLogin
		url：/law/App/User/isLogin.action
		参数传递:无

	16.用户登出
		url: /law/App/User/logout.action
		参数传递：无
	
	17.用户注册
		url: /law/App/User/register.action
		参数传递:username,psw,tel,email
		成功返回true，失败返回false
	
	18.导航条
		url: /law/App/Navs/getNavs.action
		参数传递:无
	
