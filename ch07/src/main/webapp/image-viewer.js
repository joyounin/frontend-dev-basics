var imageViewer = {
	init: function() {
		$(imageViewer._btnImage);
	},
	_changeImage: function() {
		var index = Math.floor( Math.random() * (this._images.length-1)) + 1;
		console.log(index, this._images[index]);

	},
	_btnImage: function(){
		$('.image-viewer .buttons #btn-change').click(imageViewer._changeImage);
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
	}]
}