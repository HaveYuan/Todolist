		
		$(function(){  //入场动画
		    setTimeout(function(){
		        $("#spinner").fadeOut();
		        $("#content").fadeIn();
		    }, 900)
		});
		var toDoListModule=angular.module('ToDoListModule',[]);
		toDoListModule.controller('ToDoListController',function($scope){
			
			$scope.count=0;
			$scope.IdCount=-1;
			var contents=new Array();
			$scope.Shake = false;  //文本框抖动标志
			$scope.desc = 0;  //升序降序标志
			$scope.statetion= false;  //全选按钮
			$scope.iscontent = false;
			$scope.istime = false;
			$scope.isweight = false;
			$scope.isdefault = false;
			$scope.isdone = false;
			$scope.isnodone = false;
			$scope.isall = false;
	        function study(content,time,id,weight,isFinished,mark,textDesc,isSelected){
	        	this.content=content;
	        	this.time=time;
	        	this.Id=id;
	        	this.weight=weight;
	        	this.isFinished=isFinished;
	        	this.mark=mark;
	        	this.textDesc=textDesc;
	        	this.isSelected=isSelected;
	        }

	        $scope.getFocus = function(){  
				//获取焦点时将实现的类改为flase
				$scope.Shake = false;
			}

			$scope.noFocus = function(){  
				//失去焦点时将实现的类改为flase
				$scope.Shake = false;
			}

			//全部选中
			$scope.selectAll = function($index,Id){
				if($scope.statetion==false)
				    	{
				    	for(var i=0;i<$scope.contents.length;i++)
						{
							if($scope.contents[i].isFinished==false)
							{
								$scope.contents[i].isFinished=true;
								$scope.contents[i].isSelected=true;
								$scope.contents[i].checked="checked";
								$scope.contents[i].textDesc="line-through"
							}
						}
						$scope.count=0;
						$scope.statetion=true;
						}
				    	else{
				    		for(var i=0;i<$scope.contents.length;i++)
							{
								if($scope.contents[i].isFinished==true)
								{
									$scope.contents[i].isFinished=false;
									$scope.contents[i].isSelected=false;
									$scope.contents[i].checked='';
									$scope.contents[i].textDesc="none"
								}
							}
							$scope.count=$scope.contents.length;
							$scope.statetion=false;
				    	}			
			}

			$scope.contents=contents;

			/*//按内容排序
			$scope.setOrderKeyContent=function(){
				$scope.desc = !$scope.desc;
				$scope.orderKey="content";
			}

			//按权重排序
			$scope.setOrderKeyWeight=function(){
				$scope.desc = !$scope.desc;
				$scope.orderKey="weight";
			}

			//按默认排序
			$scope.setOrderKeyDefault=function(){
				$scope.desc = 0;
				$scope.orderKey="Id";
			}

			//按时间排序
			$scope.setOrderKeyTime=function(){ 
				$scope.desc = !$scope.desc;
				$scope.orderKey="time";
			} 

			//已完成
			$scope.setFilterKeyFinished=function(){
				$scope.filterKey="true";
			}

			//未完成
			$scope.setFilterKeyUnFinished=function(){
				$scope.filterKey="false";
			}

			//全部
			$scope.setFilterKeyAll=function(){
				$scope.filterKey="all";
			}*/

			//点击事件
			$scope.change_bg = function(key){
				if(key == 1){ //按内容排序
					$scope.desc = !$scope.desc;
					$scope.orderKey="content";
					$scope.iscontent = true;
					$scope.istime = false;
					$scope.isweight = false;
					$scope.isdefault = false;
					$scope.isdone = false;
					$scope.isnodone = false;
					$scope.isall = false;

				}
				if(key == 2){//按权重排序
					$scope.desc = !$scope.desc;
					$scope.orderKey="time";
					$scope.iscontent = false;
					$scope.istime = true;
					$scope.isweight = false;
					$scope.isdefault = false;
					$scope.isdone = false;
					$scope.isnodone = false;
					$scope.isall = false;
				}
				if(key == 3){//按权重排序
					$scope.desc = !$scope.desc;
					$scope.orderKey="weight";
					$scope.iscontent = false;
					$scope.istime = false;
					$scope.isweight = true;
					$scope.isdefault = false;
					$scope.isdone = false;
					$scope.isnodone = false;
					$scope.isall = false;
				}
				if(key == 4){//按默认排序
					$scope.desc = 0;
					$scope.orderKey="Id";
					$scope.iscontent = false;
					$scope.istime = false;
					$scope.isweight = false;
					$scope.isdefault = true;
					$scope.isdone = false;
					$scope.isnodone = false;
					$scope.isall = false;
				}
				if(key == 5){//已完成
					$scope.filterKey="true";
					$scope.iscontent = false;
					$scope.istime = false;
					$scope.isweight = false;
					$scope.isdefault = false;
					$scope.isdone = true;
					$scope.isnodone = false;
					$scope.isall = false;
				}
				if(key == 6){//未完成
					$scope.filterKey="false";
					$scope.iscontent = false;
					$scope.istime = false;
					$scope.isweight = false;
					$scope.isdefault = false;
					$scope.isdone = false;
					$scope.isnodone = true;
					$scope.isall = false;
				}
				if(key == 7){//全部
					$scope.filterKey="all";
					$scope.iscontent = false;
					$scope.istime = false;
					$scope.isweight = false;
					$scope.isdefault = false;
					$scope.isdone = false;
					$scope.isnodone = false;
					$scope.isall = true;
				}
			}

			//选中/未选中
			$scope.taskFinished=function($index,Id){
	            for(var i=0;i<$scope.contents.length;i++){

					if($scope.contents[i].Id==Id){

						if($scope.contents[i].isSelected==false){

							$scope.contents[i].isSelected=true;
							$scope.contents[i].textDesc="line-through";
							$scope.contents[i].isFinished=true;
					        $scope.count--;					        
						}
						else{

							$scope.contents[i].isSelected=false;
							$scope.contents[i].textDesc="none";
							$scope.count++;
							$scope.contents[i].isFinished=false;
							 //$scope.indexs[Id]="none"
						}		
					}
				}	
			}

			$scope.setWeightBlue=function($index,Id){
				 for(var i=0;i<$scope.contents.length;i++){

					if($scope.contents[i].Id==Id){

						$scope.contents[i].weight="Dblue";
					}
				}
			}

			$scope.setWeightGreen=function($index,Id){
				 for(var i=0;i<$scope.contents.length;i++){	

					if($scope.contents[i].Id==Id){

						$scope.contents[i].weight='Cgreen';
					}
				}
			}

			$scope.setWeightCoral=function($index,Id){
				 for(var i=0;i<$scope.contents.length;i++){	

					if($scope.contents[i].Id==Id){

						$scope.contents[i].weight='Bcoral';
					}
				}
			}

			$scope.setWeightRed=function($index,Id){
				 for(var i=0;i<$scope.contents.length;i++){	

					if($scope.contents[i].Id==Id){

						$scope.contents[i].weight='Ared';
					}
				}
			}

			//删除任务
			$scope.delectItem=function($index,Id){
				for(var i=0;i<$scope.contents.length;i++){
					
					if($scope.contents[i].Id==Id){
						if($scope.contents[i].isFinished==false){
										
							$scope.count--;
						}
						$scope.contents.splice(i,1);
					}
				}
				/*for(var i=0;i<$scope.contents.length;i++)
				{
					if($scope.contents[i].Id>itemId)
					{
						$scope.contents[i].Id--;
					}
				}*/
			}

			//创建内容
			$scope.getContent=function(){
				//判断输入是否为空
				if(document.getElementById('todo').value==''){

					$scope.Shake = true;  //shake为true时文本框抖动
				}else{

					$scope.IdCount++;

					var myDate = new Date();
					var list=new study(document.getElementById('todo').value,myDate.toLocaleString(),$scope.IdCount,'Dblue',false,'all','none',false);
					
					$scope.contents.push(list);
					$scope.count++;
					document.getElementById('todo').value='';  //清除内容
				}
			}  
		});
