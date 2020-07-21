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





/**
* The ProductListEvent model module.
* @module models/ProductListEvent
* @version 20.4
*/
export default class ProductListEvent {
    /**
    * Constructs a new <code>ProductListEvent</code>.
    * Document representing a product list event.
    * @alias module:models/ProductListEvent
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>ProductListEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductListEvent} obj Optional instance to populate.
    * @return {module:models/ProductListEvent} The populated <code>ProductListEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductListEvent()





            if (data.hasOwnProperty('city')) {
                obj.city = ApiClient.convertToType(data.city, 'String')
            }
            if (data.hasOwnProperty('country')) {
                obj.country = ApiClient.convertToType(data.country, 'String')
            }
            if (data.hasOwnProperty('date')) {
                obj.date = ApiClient.convertToType(data.date, 'Date')
            }
            if (data.hasOwnProperty('state')) {
                obj.state = ApiClient.convertToType(data.state, 'String')
            }
            if (data.hasOwnProperty('type')) {
                obj.type = ApiClient.convertToType(data.type, 'String')
            }
        }
        return obj
    }

    /**
    * The city where the event takes place.
    * @member {String} city
    */
    city = undefined;
    /**
    * The country where the event takes place.
    * @member {String} country
    */
    country = undefined;
    /**
    * The date when the event takes place.
    * @member {Date} date
    */
    date = undefined;
    /**
    * The federal state where the event takes place.
    * @member {String} state
    */
    state = undefined;
    /**
    * Type of the event to celebrate.
    * @member {String} type
    */
    type = undefined;








}


