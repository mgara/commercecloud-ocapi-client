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
import OrderPaymentCardRequest from './OrderPaymentCardRequest'
import PaymentBankAccountRequest from './PaymentBankAccountRequest'





/**
* The OrderPaymentInstrumentRequest model module.
* @module models/OrderPaymentInstrumentRequest
* @version 20.4
*/
export default class OrderPaymentInstrumentRequest {
    /**
    * Constructs a new <code>OrderPaymentInstrumentRequest</code>.
    * Document representing an order payment instrument request.
    * @alias module:models/OrderPaymentInstrumentRequest
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>OrderPaymentInstrumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderPaymentInstrumentRequest} obj Optional instance to populate.
    * @return {module:models/OrderPaymentInstrumentRequest} The populated <code>OrderPaymentInstrumentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentInstrumentRequest()

            if (data.hasOwnProperty('amount')) {
                obj.amount = ApiClient.convertToType(data.amount, 'Number')
            }
            if (data.hasOwnProperty('bank_routing_number')) {
                obj.bank_routing_number = ApiClient.convertToType(data.bank_routing_number, 'String')
            }
            if (data.hasOwnProperty('create_customer_payment_instrument')) {
                obj.create_customer_payment_instrument = ApiClient.convertToType(data.create_customer_payment_instrument, 'Boolean')
            }
            if (data.hasOwnProperty('customer_payment_instrument_id')) {
                obj.customer_payment_instrument_id = ApiClient.convertToType(data.customer_payment_instrument_id, 'String')
            }
            if (data.hasOwnProperty('gift_certificate_code')) {
                obj.gift_certificate_code = ApiClient.convertToType(data.gift_certificate_code, 'String')
            }
            if (data.hasOwnProperty('payment_bank_account')) {
                obj.payment_bank_account = PaymentBankAccountRequest.constructFromObject(data.payment_bank_account)
            }
            if (data.hasOwnProperty('payment_card')) {
                obj.payment_card = OrderPaymentCardRequest.constructFromObject(data.payment_card)
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj.payment_method_id = ApiClient.convertToType(data.payment_method_id, 'String')
            }

            if (data.hasOwnProperty('c_captureContextKey')) {
                obj.c_captureContextKey = ApiClient.convertToType(data.c_captureContextKey, 'String')
            }
            if (data.hasOwnProperty('c_microformToken')) {
                obj.c_microformToken = ApiClient.convertToType(data.c_microformToken, 'String')
            }
        }
        return obj
    }

    /**
    * The payment transaction amount.
    * @member {Number} amount
    */
    amount = undefined;
    /**
    * The bank routing number.
    * @member {String} bank_routing_number
    */
    bank_routing_number = undefined;
    /**
    * A flag indicating whether a related customer payment instrument should be created. The CustomerPaymentInstrument  is only created when the OrderPaymentInstrument was authorized successfully.
    * @member {Boolean} create_customer_payment_instrument
    */
    create_customer_payment_instrument = undefined;
    /**
    * The id of a customer payment instrument.
    * @member {String} customer_payment_instrument_id
    */
    customer_payment_instrument_id = undefined;
    /**
    * The gift certificate code.
    * @member {String} gift_certificate_code
    */
    gift_certificate_code = undefined;
    /**
    * The payment bank account request data.
    * @member {module:models/PaymentBankAccountRequest} payment_bank_account
    */
    payment_bank_account = undefined;
    /**
    * The payment card.
    * @member {module:models/OrderPaymentCardRequest} payment_card
    */
    payment_card = undefined;
    /**
    * The payment method id. Optional if a customer payment instrument id is specified.
    * @member {String} payment_method_id
    */
    payment_method_id = undefined;








}


