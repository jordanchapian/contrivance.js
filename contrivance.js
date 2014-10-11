(function(){
	window.co = {
		util:{},
		structure:{},
		sort:{}
	}

	/////////////////////////////
	///////DATA STRUCTURES///////
	/////////////////////////////

	//STACK
	(function(){

		co.structure.Stack = function Stack(){
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

	})();

	//QUEUE
	(function(){

		co.structure.Queue = function Queue(){
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

	})();

	//Binary Search Tree
	(function(){

		var TreeNode = function(value, parent){
			this.val = value;
			this.parent = parent;

			this.child = {
				left:undefined,
				right:undefined
			}
		}

		co.structure.BinarySearchTree = function(){
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
	

	

	

	////////////////////////////////
	///////SORTING ALGORITHMS///////
	////////////////////////////////

	// BUBBLE SORT
		//Worst   : O(n^2)
		//Best    : O(n)
		//Average : O(n^2)

	(function(){
		co.sort.BubbleSort = function(a, accessor, comparator){
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
		}
	})();

	//SELECTION SORT
		//Worst   : O(n^2)
		//Best    : O(n^2)
		//Average : O(n^2)

	(function(){
		co.sort.SelectionSort = function(a, accessor, comparator){
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
	})();

	// MergeSort
	(function(){

		var MergeSort = function(a, helper, low, high, accessor){
			if(low < high){
				var middle = Math.floor((high + low) / 2);
				console.log(low, middle, high)
				//sort left
				MergeSort(a, helper, low, middle, accessor);
				//sort right
				MergeSort(a, helper, (middle + 1), high, accessor);
				//merge the two arrays
				Merge(a, helper, low, middle, high);
			}
		}

		var Merge = function(a, helper, low, middle, high, accessor){
			for(var i = low; i <= high; i++){
				helper[i] = a[i];
			}

			var lIndex = low;
			var rIndex = (middle + 1);
			var current = low;

			while(lIndex <= middle && rIndex <= high){
				if(helper[lIndex] <= helper[rIndex]){
					a[current] = helper[lIndex];
					lIndex++;
				}
				else{
					a[current] = helper[rIndex];
					rIndex++;
				}
				current++;
			}

			var remaining = middle - lIndex;
			for(var i=0; i <= remaining; i++){
				a[current + i] = helper[lIndex + i];
			}
		}

		co.sort.MergeSort = function(a, accessor){
			if(!accessor) accessor = function(e){return e;}

			var helper = new Array(a.length);
			MergeSort(a, helper, 0, (a.length - 1), accessor);

			return a;
		}

	})();


})();