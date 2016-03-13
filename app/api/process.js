/**
 *   请求服务接口
 *   @author [guotingchaopr@gmail.com]
 */
'use strict';
import qs  from "qs";
export default class Process{
	constructor(params){
		this.url = params.url;
		this.method = params.method || "GET";
		this.callback = params.callback;
		this.params = qs.stringify(params.options);
		this.headers  = params.headers;
	}
	push(){
		if(!(this.url|| this.callback)){
			throw new Error("孩子,首先必须确认 url 和 callback 属性有值!");
			return;
		}
		let _callback = this.callback;
		fetch("http://127.0.0.1:8081?link="+this.url+"&"+this.params,{
			"mode":"cors",
			headers:this.headers,
			body : this.method == "POST"?this.body:null,
			method:this.method
		}).then(function(res){
			if(res.ok){
				res.text().then(function(text){
					_callback(text);
				})
			}else{
				_callback("Response code:" + res.status);
			}
		},function(err){
			_callback(err);
		});
	}
}