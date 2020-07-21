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
* The VariationGroup model module.
* @module models/VariationGroup
* @version 20.4
*/
export default class VariationGroup {
    /**
    * Constructs a new <code>VariationGroup</code>.
    * Document representing a variation group.
    * @alias module:models/VariationGroup
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>VariationGroup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/VariationGroup} obj Optional instance to populate.
    * @return {module:models/VariationGroup} The populated <code>VariationGroup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariationGroup()





            if (data.hasOwnProperty('link')) {
                obj.link = ApiClient.convertToType(data.link, 'String')
            }
            if (data.hasOwnProperty('orderable')) {
                obj.orderable = ApiClient.convertToType(data.orderable, 'Boolean')
            }
            if (data.hasOwnProperty('price')) {
                obj.price = ApiClient.convertToType(data.price, 'Number')
            }
            if (data.hasOwnProperty('product_id')) {
                obj.product_id = ApiClient.convertToType(data.product_id, 'String')
            }
            if (data.hasOwnProperty('variation_values')) {
                obj.variation_values = ApiClient.convertToType(data.variation_values, {String: 'String'})
            }
        }
        return obj
    }

    /**
    * The URL addressing the product.
    * @member {String} link
    */
    link = undefined;
    /**
    * A flag indicating whether the variation group is orderable.
    * @member {Boolean} orderable
    */
    orderable = undefined;
    /**
    * The sales price of the variation group.
    * @member {Number} price
    */
    price = undefined;
    /**
    * The id (SKU) of the variation group.
    * @member {String} product_id
    */
    product_id = undefined;
    /**
    * The actual variation attribute id - value pairs.
    * @member {Object.<String, String>} variation_values
    */
    variation_values = undefined;








}


