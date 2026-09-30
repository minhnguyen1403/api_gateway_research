export default {
    env: 'development',
    db: 'mongodb://localhost:27017/TRACKING-FCAM',
    port: '',
    ACCESS_TOKEN_SECRET: "<ACCESS_TOKEN_SECRET>",
    ACCESS_TOKEN_LIFE: '1h',

    // url_product: "http://nginx_load_balancer:85/product",
    // url_payment: "http://nginx_load_balancer:85/payment",
    // url_category: "http://api-gateway:3333/category",
    // url_cart_inventory: "http://nginx_load_balancer:85/inventory-cart-ms",
    // url_price_promo: "http://nginx_load_balancer:85/price-promo"
    url_product: "http://service_proxy/product",
    url_payment: "http://service_proxy/payment",
    url_category: "http://service_proxy/category",
    url_cart_inventory: "http://service_proxy/inventory-cart-ms",
    url_price_promo: "http://service_proxy/price-promo"
}
