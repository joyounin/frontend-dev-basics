var imageViewer = {
	_changeImage: function() {
		//console.log(this);
		var _this = this;
		
		var index = Math.floor(Math.random()*this._images.length);
		while($('img').attr('title') ===  _this._images[index].name){
			index = Math.floor(Math.random()*this._images.length);
		}
		var images = _this._images[index];
		console.log(images.name);
		$("img").attr({
			src: 'images/' + images.file,
			title: images.name
		});
	},
	_btnChange: function() {
		var _this = this;
		$('#btn-change').click(function() {
			$(imageViewer._changeImage.bind(_this));
		});
	},
	_btnSlide: function(){
		var _this = this;
		var toggle = true;
			
		$('#btn-slideshow').click(function(){
			if(toggle){
				sInterval = setInterval(function(){
				$(imageViewer._changeImage.bind(_this));
				$('#btn-slideshow').text("슬라이드쇼 중지")
				toggle = false;	
			},1000);
			} else {
				clearInterval(sInterval);
				$('#btn-slideshow').text("슬라이드쇼 시작")
				toggle = true;
			}
		});
	},
	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'Desert.jpg'
	}, {
		name: '수국',
		file: 'Hydrangeas.jpg'
	}, {
		name: '젤리피쉬',
		file: 'Jellyfish.jpg'
	}, {
		name: '코알라',
		file: 'Koala.jpg'
	}, {
		name: '등대',
		file: 'Lighthouse.jpg'
	}, {
		name: '펭귄',
		file: 'Penguins.jpg'
	}, {
		name: '튤립',
		file: 'Tulips.jpg'
	}],
	init: function() {
		$(imageViewer._btnChange.bind(this));
		$(imageViewer._btnSlide.bind(this));

	}
}