/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient'
import BonusDiscountLineItem from './BonusDiscountLineItem'
import CouponItem from './CouponItem'
import CustomerInfo from './CustomerInfo'
import GiftCertificateItem from './GiftCertificateItem'
import OrderAddress from './OrderAddress'
import OrderPaymentInstrument from './OrderPaymentInstrument'
import PriceAdjustment from './PriceAdjustment'
import ProductItem from './ProductItem'
import Shipment from './Shipment'
import ShippingItem from './ShippingItem'
import SimpleLink from './SimpleLink'





/**
* The Basket model module.
* @module models/Basket
* @version 20.4
*/
export default class Basket {
    /**
    * Constructs a new <code>Basket</code>.
    * Document representing a basket.
    * @alias module:models/Basket
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>Basket</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Basket} obj Optional instance to populate.
    * @return {module:models/Basket} The populated <code>Basket</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Basket()





            if (data.hasOwnProperty('adjusted_merchandize_total_tax')) {
                obj.adjusted_merchandize_total_tax = ApiClient.convertToType(data.adjusted_merchandize_total_tax, 'Number')
            }
            if (data.hasOwnProperty('adjusted_shipping_total_tax')) {
                obj.adjusted_shipping_total_tax = ApiClient.convertToType(data.adjusted_shipping_total_tax, 'Number')
            }
            if (data.hasOwnProperty('agent_basket')) {
                obj.agent_basket = ApiClient.convertToType(data.agent_basket, 'Boolean')
            }
            if (data.hasOwnProperty('basket_id')) {
                obj.basket_id = ApiClient.convertToType(data.basket_id, 'String')
            }
            if (data.hasOwnProperty('billing_address')) {
                obj.billing_address = OrderAddress.constructFromObject(data.billing_address)
            }
            if (data.hasOwnProperty('bonus_discount_line_items')) {
                obj.bonus_discount_line_items = ApiClient.convertToType(data.bonus_discount_line_items, [BonusDiscountLineItem])
            }
            if (data.hasOwnProperty('c_sessionAddressBook')) {
                obj.c_sessionAddressBook = ApiClient.convertToType(data.c_sessionAddressBook, 'String')
            }
            if (data.hasOwnProperty('channel_type')) {
                obj.channel_type = ApiClient.convertToType(data.channel_type, 'String')
            }
            if (data.hasOwnProperty('coupon_items')) {
                obj.coupon_items = ApiClient.convertToType(data.coupon_items, [CouponItem])
            }
            if (data.hasOwnProperty('creation_date')) {
                obj.creation_date = ApiClient.convertToType(data.creation_date, 'Date')
            }
            if (data.hasOwnProperty('currency')) {
                obj.currency = ApiClient.convertToType(data.currency, 'String')
            }
            if (data.hasOwnProperty('customer_info')) {
                obj.customer_info = CustomerInfo.constructFromObject(data.customer_info)
            }
            if (data.hasOwnProperty('gift_certificate_items')) {
                obj.gift_certificate_items = ApiClient.convertToType(data.gift_certificate_items, [GiftCertificateItem])
            }
            if (data.hasOwnProperty('inventory_reservation_expiry')) {
                obj.inventory_reservation_expiry = ApiClient.convertToType(data.inventory_reservation_expiry, 'Date')
            }
            if (data.hasOwnProperty('last_modified')) {
                obj.last_modified = ApiClient.convertToType(data.last_modified, 'Date')
            }
            if (data.hasOwnProperty('merchandize_total_tax')) {
                obj.merchandize_total_tax = ApiClient.convertToType(data.merchandize_total_tax, 'Number')
            }
            if (data.hasOwnProperty('notes')) {
                obj.notes = SimpleLink.constructFromObject(data.notes)
            }
            if (data.hasOwnProperty('order_price_adjustments')) {
                obj.order_price_adjustments = ApiClient.convertToType(data.order_price_adjustments, [PriceAdjustment])
            }
            if (data.hasOwnProperty('order_total')) {
                obj.order_total = ApiClient.convertToType(data.order_total, 'Number')
            }
            if (data.hasOwnProperty('payment_instruments')) {
                obj.payment_instruments = ApiClient.convertToType(data.payment_instruments, [OrderPaymentInstrument])
            }
            if (data.hasOwnProperty('product_items')) {
                obj.product_items = ApiClient.convertToType(data.product_items, [ProductItem])
            }
            if (data.hasOwnProperty('product_sub_total')) {
                obj.product_sub_total = ApiClient.convertToType(data.product_sub_total, 'Number')
            }
            if (data.hasOwnProperty('product_total')) {
                obj.product_total = ApiClient.convertToType(data.product_total, 'Number')
            }
            if (data.hasOwnProperty('shipments')) {
                obj.shipments = ApiClient.convertToType(data.shipments, [Shipment])
            }
            if (data.hasOwnProperty('shipping_items')) {
                obj.shipping_items = ApiClient.convertToType(data.shipping_items, [ShippingItem])
            }
            if (data.hasOwnProperty('shipping_total')) {
                obj.shipping_total = ApiClient.convertToType(data.shipping_total, 'Number')
            }
            if (data.hasOwnProperty('shipping_total_tax')) {
                obj.shipping_total_tax = ApiClient.convertToType(data.shipping_total_tax, 'Number')
            }
            if (data.hasOwnProperty('source_code')) {
                obj.source_code = ApiClient.convertToType(data.source_code, 'String')
            }
            if (data.hasOwnProperty('tax_total')) {
                obj.tax_total = ApiClient.convertToType(data.tax_total, 'Number')
            }
            if (data.hasOwnProperty('taxation')) {
                obj.taxation = ApiClient.convertToType(data.taxation, 'String')
            }
        }
        return obj
    }

    /**
     * The products tax after discounts applying in purchase currency.   Adjusted merchandize prices represent the sum of product prices before  services such as shipping have been added, but after adjustment from  promotions have been added.
     * @member {Number} adjusted_merchandize_total_tax
    **/
    adjusted_merchandize_total_tax = undefined;
    /**
    * The tax of all shipping line items of the line item container after  shipping adjustments have been applied.
    * @member {Number} adjusted_shipping_total_tax
    */
    adjusted_shipping_total_tax = undefined;
    /**
    * Is the basket created by an agent?
    * @member {Boolean} agent_basket
    */
    agent_basket = undefined;
    /**
    * The unique identifier for the basket.
    * @member {String} basket_id
    */
    basket_id = undefined;
    /**
    * The billing address. This property is part of basket checkout information only.
    * @member {module:models/OrderAddress} billing_address
    */
    billing_address = undefined;
    /**
    * The bonus discount line items of the line item container.
    * @member {Array.<module:models/BonusDiscountLineItem>} bonus_discount_line_items
    */
    bonus_discount_line_items = undefined;
    /**
    * @member {String} c_sessionAddressBook
    */
    c_sessionAddressBook = undefined;
    /**
    * The sales channel for the order.    This is a read-only attribute that can't be modified by an OCAPI call. For OCAPI, the sales channel is determined  based on the client ID and token used for the OCAPI call. Usually, a customer-based authentication sets the  channel to Storefront, and an agent-based authentication sets it to CallCenter. Using applications that use other  client IDs for OCAPI calls, like Customer Service Center, will set different channel types. To modify the channel  type in OCAPI, use a hook. *
    * @member {module:models/Basket.ChannelTypeEnum} channel_type
    */
    channel_type = undefined;
    /**
    * The sorted array of coupon items. This array can be empty.
    * @member {Array.<module:models/CouponItem>} coupon_items
    */
    coupon_items = undefined;
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined;
    /**
    * The ISO 4217 mnemonic code of the currency.
    * @member {String} currency
    */
    currency = undefined;
    /**
    * The customer information for logged in customers. This property is part of basket checkout information only.
    * @member {module:models/CustomerInfo} customer_info
    */
    customer_info = undefined;
    /**
    * The sorted array of gift certificate line items. This array can be empty.
    * @member {Array.<module:models/GiftCertificateItem>} gift_certificate_items
    */
    gift_certificate_items = undefined;
    /**
    *
    * @member {Date} inventory_reservation_expiry
    */
    inventory_reservation_expiry = undefined;
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined;
    /**
    * The products total tax in purchase currency.   Merchandize total prices represent the sum of product prices before  services such as shipping or adjustment from promotions have  been added.
    * @member {Number} merchandize_total_tax
    */
    merchandize_total_tax = undefined;
    /**
    * The notes for the line item container.
    * @member {module:models/SimpleLink} notes
    */
    notes = undefined;
    /**
    * The array of order level price adjustments. This array can be empty.
    * @member {Array.<module:models/PriceAdjustment>} order_price_adjustments
    */
    order_price_adjustments = undefined;
    /**
    * The total price of the order, including products, shipping and tax. This property is part of basket checkout  information only.
    * @member {Number} order_total
    */
    order_total = undefined;
    /**
    * The payment instruments list for the order.
    * @member {Array.<module:models/OrderPaymentInstrument>} payment_instruments
    */
    payment_instruments = undefined;
    /**
    * The sorted array of product items (up to a maximum of 50 items). This array can be empty.
    * @member {Array.<module:models/ProductItem>} product_items
    */
    product_items = undefined;
    /**
    * The total price of all product items after all product discounts.  Depending on taxation policy the returned price is net or gross.
    * @member {Number} product_sub_total
    */
    product_sub_total = undefined;
    /**
    * The total price of all product items after all product and order discounts.  Depending on taxation policy the returned price is net or gross.
    * @member {Number} product_total
    */
    product_total = undefined;
    /**
    * The array of shipments. This property is part of basket checkout information only.
    * @member {Array.<module:models/Shipment>} shipments
    */
    shipments = undefined;
    /**
    * The sorted array of shipping items. This array can be empty.
    * @member {Array.<module:models/ShippingItem>} shipping_items
    */
    shipping_items = undefined;
    /**
    * The total shipping price of the order after all shipping discounts. Excludes tax if taxation policy is net. Includes  tax if taxation policy is gross. This property is part of basket checkout information only.
    * @member {Number} shipping_total
    */
    shipping_total = undefined;
    /**
    * The tax of all shipping line items of the line item container before  shipping adjustments have been applied.
    * @member {Number} shipping_total_tax
    */
    shipping_total_tax = undefined;
    /**
    * Gets the source code assigned to this basket.
    * @member {String} source_code
    */
    source_code = undefined;
    /**
    * The total tax amount of the order. This property is part of basket checkout information only.
    * @member {Number} tax_total
    */
    tax_total = undefined;
    /**
    * The taxation the line item container is based on.
    * @member {module:models/Basket.TaxationEnum} taxation
    */
    taxation = undefined;






    /**
    * Allowed values for the <code>channel_type</code> property.
    * @enum {String}
    * @readonly
    */
    static ChannelTypeEnum = {

        /**
         * value: "storefront"
         * @const
         */
        storefront: 'storefront',

        /**
         * value: "callcenter"
         * @const
         */
        callcenter: 'callcenter',

        /**
         * value: "marketplace"
         * @const
         */
        marketplace: 'marketplace',

        /**
         * value: "dss"
         * @const
         */
        dss: 'dss',

        /**
         * value: "store"
         * @const
         */
        store: 'store',

        /**
         * value: "pinterest"
         * @const
         */
        pinterest: 'pinterest',

        /**
         * value: "twitter"
         * @const
         */
        twitter: 'twitter',

        /**
         * value: "facebookads"
         * @const
         */
        facebookads: 'facebookads',

        /**
         * value: "subscriptions"
         * @const
         */
        subscriptions: 'subscriptions',

        /**
         * value: "onlinereservation"
         * @const
         */
        onlinereservation: 'onlinereservation',

        /**
         * value: "customerservicecenter"
         * @const
         */
        customerservicecenter: 'customerservicecenter',

        /**
         * value: "instagramcommerce"
         * @const
         */
        instagramcommerce: 'instagramcommerce'
    };

    /**
    * Allowed values for the <code>taxation</code> property.
    * @enum {String}
    * @readonly
    */
    static TaxationEnum = {

        /**
         * value: "gross"
         * @const
         */
        gross: 'gross',

        /**
         * value: "net"
         * @const
         */
        net: 'net'
    };



}
