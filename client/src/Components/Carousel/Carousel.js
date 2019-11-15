import React from 'react';
import './Carousel.css';
import Fade from 'react-reveal/Fade';

const imgUrls = [
	"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/MLG_Columbus_-_Luminosity_vs_Navi.jpg/1200px-MLG_Columbus_-_Luminosity_vs_Navi.jpg", 
	"https://oddslifenetstorage.blob.core.windows.net/esportsinsider/2018/11/LoL-World-Championships.jpg",
	"https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/05/24150521/36037775330_3477d412fc_k.jpg",

];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
      
			<div className="carousel">
        
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
        <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
        
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
        
			</div>
     
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
    <Fade up>
		<div className="image-slide" style={styles}></div>
    </Fade>
	);
}

export default Carousel;

