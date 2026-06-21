import { useCart } from '../context/CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import './Cart.css'

function Cart() {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} aria-label="Close cart overlay" />
      <div className="cart-drawer">
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Your Bag</h2>
          <button className="cart-drawer__close" onClick={closeCart} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-drawer__content">
          {cartItems.length === 0 ? (
            <div className="cart-drawer__empty">
              <ShoppingBag size={48} />
              <p>Your bag is empty.</p>
              <button className="liquid-glass-green" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-drawer__items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item__image" />
                  <div className="cart-item__details">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__price">₹{item.price}</p>
                    <div className="cart-item__actions">
                      <div className="cart-item__quantity">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        className="cart-item__remove" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <p className="cart-drawer__shipping">Shipping & taxes calculated at checkout.</p>
            <button className="cart-drawer__checkout liquid-glass-green">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
