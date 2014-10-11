(function(){
	window.co = {
		util:{},
		structure:{},
		sort:{}
	};
	///////////////////////////////
	///////GENERAL UTILITIES///////
	///////////////////////////////

	//In-Place Swap
	(function(){

		co.util.swap = function(a, x, y){
			var tmp = a[x];
			a[x] = a[y];
			a[y] = tmp;
		}

	})();

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
		//Worst       : O(n^2)
		//Best        : O(n)
		//Average     : O(n^2)
		//Aux Memory  : O(1)

	(function(){
		co.sort.BubbleSort = function(a, accessor, comparator){
			if(!accessor) accessor = function(e){return e;}
			var sorted = 0;

			while(!sorted){
				sorted = 1; //assume
				for(var i = 0; i < (a.length - 1); i++){
					if(a[i] > a[i+1]){
						co.util.swap(a, i, (i+1));
						sorted = 0;
					}
				}
			}

			return a;
		}
	})();

	//SELECTION SORT
		//Worst       : O(n^2)
		//Best        : O(n^2)
		//Average     : O(n^2)
		//Aux Memory  : O(1)

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
					co.util.swap(a, smallest, i);
				}
			}

			return a;
		}
	})();

	// MERGE SORT
		//Worst       : O(nlog(n))
		//Best        : O(nlog(n))
		//Average     : O(nlog(n))
		//Aux Memory  : O(n)

	(function(){

		var MergeSort = function(a, helper, low, high, accessor){
			if(low < high){
				var middle = Math.floor((high + low) / 2);
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

	//QUICK SORT
		//Worst       : O(n^2)
		//Best        : O(nlog(n))
		//Average     : O(nlog(n))
		//Aux Memory  : O(n)

	(function(){

		var QuickSort = function(a, left, right, accessor){
			var index = partition(a, left, right); //will be our pivot point

			if(left < (index - 1)){//sort left
				QuickSort(a, 0, (index - 1), accessor);
			}
			if(right > index){//sort right
				QuickSort(a, index, right, accessor);
			}
		}

		var partition = function(a, left, right){
			var pivot = a[Math.floor((left + right) / 2)];

			while(left <= right){ 
				//find left elements that should be to the right of the pivot
				while(a[left] < pivot)left++;
				//find left elements that should be to the left of the pivot
				while(a[right] > pivot)right--;

				//perform the swap, if our condition has not been breached
				if(left <= right){
					co.util.swap(a, left, right);
					left++;
					right--;
				}
			}

			return left;
		}

		co.sort.QuickSort = function(a, accessor){
			if(!accessor) accessor = function(e){return e;}
			QuickSort(a, 0, (a.length - 1), accessor);

			return a;
		}

	})();

	//////////////////////////////////
	///////SEARCHING ALGORITHMS///////
	//////////////////////////////////

	//Binary Search
		//Worst       : O(nlog(n))
		//Best        : O(1)
		//Average     : O(nlog(n))
		//Aux Memory  : O(n)
		
	(function(){

	})();

})();