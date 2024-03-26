import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to our e-commerce website, your one-stop destination for seamless online shopping. Browse through our extensive collection of products from the comfort of your home, explore the latest trends, and discover exclusive deals and discounts. With secure payment options and swift delivery services, we aim to provide you with a convenient and enjoyable shopping experience. Shop with confidence and elevate your online shopping journey with us today!</p>
            <p>An e-commerce website enables businesses to sell products or services online by providing functions such as product listings, shopping cart management, secure checkout, user accounts, search and filter options, order management, customer support, promotions, analytics, and mobile responsiveness.</p>

        </div>
    </div>
  )
}

export default DescriptionBox