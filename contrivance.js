(function(){

	var TreeNode = function(value, parent){
		this.val = value;
		this.parent = parent;

		this.child = {
			left:undefined,
			right:undefined
		}
	}

	window.Stack = function Stack(){
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

	window.Queue = function Queue(){
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

	window.BinarySearchTree = function(){
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

})();