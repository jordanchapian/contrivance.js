(function(){
	window.co = {
		util:{},
		structure:{}
	}
	var TreeNode = function(value, parent){
		this.val = value;
		this.parent = parent;

		this.child = {
			left:undefined,
			right:undefined
		}
	}

	co.Stack = function Stack(){
		var _stack = [];
		this.push = function(e){
			_stack = [e].concat(_stack);
			return e;
		}
		this.pop = function(){
			if(_stack.length)return _stack.splice(0, 1)[0];
			else return undefined;
		}
		this.isEmpty = function(){
			return (_stack.length == 0);
		}
		this.peek = function(){
			return (_stack.length) ? _stack[0] : undefined;
		}
	}

	co.Queue = function Queue(){
		var _queue = [];

		this.push = function(e){
			_queue.push(e)
		}

		this.pop = function(){
			if(_queue.length)return _queue.splice(_queue.length - 1, 1)[0];
			else return undefined;
		}
		this.peek = function(){
			return (_queue.length) ? _queue[_queue.length - 1] : undefined;
		}
		this.isEmpty = function(){
			return (_queue.length == 0);
		}
	}

	co.BinarySearchTree = function(){
		var root = this.root = new TreeNode(undefined);

		this.push = function(value){
			
		}

		var findNode = function(key, node){
			var c = root;
			while(c != undefined){

			}
		}

		this.find = function(key){
			return findNode(key, root);
		}
	}



	co.sort = {
		BubbleSort: function(a, accessor, comparator){
			if(!accessor) accessor = function(e){return e;}
			var sorted = 0;

			while(!sorted){
				sorted = 1; //assume
				for(var i = 0; i < (a.length - 1); i++){
					if(a[i] > a[i+1]){
						var tmp = a[i];
						a[i] = a[i + 1];
						a[i+1] = tmp;
						sorted = 0;
					}
				}
			}

			return a;
		},
		SelectionSort: function(a, accessor, comparator){
			if(!accessor) accessor = function(e){return e;}

			for(var i = 0; i < a.length; i++){
				var smallest = i;
				for(var j=(i + 1); j < a.length; j++){
					if(a[smallest] > a[j]) smallest = j;
				}
				//perform swap
				if(i != smallest){
					var tmp = a[smallest];
					a[smallest] = a[i];
					a[i] = tmp;
				}
			}

			return a;
		}
	}
})();