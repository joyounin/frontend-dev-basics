var imageViewer = {
	_changeImage: function() {
		//console.log(images);
		var _this = this;
		$('#btn-change').click(function(){
			var index = Math.floor( Math.random() * (_this._images.length-1)) + 1;
			var images = _this._images[index];
			$("img").attr({
			src: 'images/' +  images.file,
			title: images.name
			});
		});
	},
	_intevalId: null,
	_images: [{
		name: '국화', 
		file: 'Chrysanthemum.jpg'
	},{
		name: '사막', 
		file: 'Desert.jpg'
	},{
		name: '수국', 
		file: 'Hydrangeas.jpg'
	},{
		name: '젤리피쉬', 
		file: 'Jellyfish.jpg'
	},{
		name: '코알라', 
		file: 'Koala.jpg'
	},{
		name: '등대', 
		file: 'Lighthouse.jpg'
	},{
		name: '펭귄', 
		file: 'Penguins.jpg'
	},{
		name: '튤립', 
		file: 'Tulips.jpg'
	}],
	init: function() {
			$(imageViewer._changeImage.bind(this));
	}
}