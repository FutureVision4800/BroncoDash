/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

export default class ProductGallery extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })).isRequired,
  };

  constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      currentImagePreview: 0,
    };
  }

  changeImg = (i, e) => {
    e.preventDefault();
    this.setState({
      currentImagePreview: i,
      currentImage: i,
    });
  };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: this.state.currentImagePreview,
      lightboxIsOpen: false,
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };

  gotoImage = (index) => {
    this.setState({
      currentImage: index,
    });
  };

  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  };

  render() {
    return (
      <div className="product-gallery">
        <a
          className="product-gallery__current-img"
          onClick={e => this.openLightbox(this.state.currentImage, e)}
          href={this.props.images[this.state.currentImage].src}
        >
          <img src={this.props.images[this.state.currentImagePreview].src} alt="product-img" />
        </a>
        <div className="product_gallery__gallery">
          {this.props.images.map((img, i) =>
            (
              <button key={i} onClick={e => this.changeImg(i, e)} className="product-gallery__img-preview">
                <img src={img.src} alt="product-img" />
              </button>
            ))}
        </div>
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}
