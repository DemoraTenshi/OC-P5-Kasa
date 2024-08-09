import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'
import leftArrow from '../../assets/arrow-prev.png'
import rightArrow from '../../assets/arrow-next.png'

function Modal({ images, currentIndex, onClose, onNavigate }) {
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        onNavigate(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        onNavigate(newIndex)
    }

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='modal__slide'>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                    <p className='modal__caption'>
                        {currentIndex + 1}/{images.length}
                    </p>
                </div>
                <button className='modal__button prev' onClick={goToPrevious}>
                    <img src={leftArrow} alt='Previous' />
                </button>
                <button className='modal__button next' onClick={goToNext}>
                    <img src={rightArrow} alt='Next' />
                </button>
                <button className='modal__close' onClick={onClose}>Fermer</button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentIndex: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired,
}

export default Modal