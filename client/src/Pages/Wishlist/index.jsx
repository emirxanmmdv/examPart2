import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlistContext'
import "./index.scss"

const Wishlist = () => {
    const { wishlist, addToWishlist } = useContext(WishlistContext)

    return (
        <>
        {wishlist &&
            wishlist.map((item) => (
                <div className="productCard">
                    <div className="productImg">
                        <img src={item.image} />
                    </div>
                    <div className="productName">
                        <p>{item.name}</p>
                    </div>
                    <div className="productPrice">
                        <p>${item.price}</p>
                    </div>
                    <div className="addToWishList">
                        <button className="addToWishListBtn" onClick={() => addToWishlist(item)}>
                            Remove from Wishlist
                        </button>
                    </div>
                </div>
            ))}



        </>
    )
}

export default Wishlist