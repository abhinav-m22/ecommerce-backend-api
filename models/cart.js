const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    cart_id: { 
        type: String, 
        required: true 
    },
    user_id: { 
        type: String, 
        required: true 
    },
    created_at: { 
        type: Date, 
        required: true 
    },
    updated_at: { 
        type: Date, 
        required: true 
    },
    items: [
        {
            product_id: { 
                type: String, 
                required: true 
            },
            quantity: { 
                type: Number, 
                required: true 
            },
            price: { 
                type: Number, 
                required: true 
            },
            created_at: { 
                type: Date, 
                required: true 
            },
            updated_at: { 
                type: Date, 
                required: true 
            },
        },
    ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
