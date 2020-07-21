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
import CustomerProductListItem from './CustomerProductListItem'





/**
* The CustomerProductListItemResult model module.
* @module models/CustomerProductListItemResult
* @version 20.4
*/
export default class CustomerProductListItemResult {
    /**
    * Constructs a new <code>CustomerProductListItemResult</code>.
    * Document representing a customer product list items result.
    * @alias module:models/CustomerProductListItemResult
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>CustomerProductListItemResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerProductListItemResult} obj Optional instance to populate.
    * @return {module:models/CustomerProductListItemResult} The populated <code>CustomerProductListItemResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProductListItemResult()





            if (data.hasOwnProperty('count')) {
                obj.count = ApiClient.convertToType(data.count, 'Number')
            }
            if (data.hasOwnProperty('data')) {
                obj.data = ApiClient.convertToType(data.data, [CustomerProductListItem])
            }
            if (data.hasOwnProperty('next')) {
                obj.next = ApiClient.convertToType(data.next, 'String')
            }
            if (data.hasOwnProperty('previous')) {
                obj.previous = ApiClient.convertToType(data.previous, 'String')
            }
            if (data.hasOwnProperty('start')) {
                obj.start = ApiClient.convertToType(data.start, 'Number')
            }
            if (data.hasOwnProperty('total')) {
                obj.total = ApiClient.convertToType(data.total, 'Number')
            }
        }
        return obj
    }

    /**
    * @member {Number} count
    */
    count = undefined;
    /**
    * The customer product list items.
    * @member {Array.<module:models/CustomerProductListItem>} data
    */
    data = undefined;
    /**
    * The URL of the next result page.
    * @member {String} next
    */
    next = undefined;
    /**
    * The URL of the previous result page.
    * @member {String} previous
    */
    previous = undefined;
    /**
    * The zero-based index of the first search hit to include in the result.
    * @member {Number} start
    */
    start = undefined;
    /**
    * @member {Number} total
    */
    total = undefined;








}


