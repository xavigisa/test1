(function ($) {
	$.fn.localeSort = function (options) {
		var settings = $.extend({}, $.fn.localeSort.defaults, options), $this = this;
 
		return this.each(function () {
			function sorty(list, compare, elem) {
		        elem = typeof elem !== 'undefined' ? elem : 'li';
 
				var listElements = list.find(elem);
 
				listElements.sort(compare);
 
				list.empty();
 
				listElements.each(function (index, li) {
					list.append(li);
				});
			}
 
			if (settings.ul === true) {
				sorty($this, settings.compare);
			}
		});
	};
 
	$.fn.localeSort.defaults = {
		ul: true,
		compare: function localeCompareSort(a, b) {
			var t1 = $(a),
				t2 = $(b);
			return t1.text().localeCompare(t2.text());
		}
	};
}(jQuery));