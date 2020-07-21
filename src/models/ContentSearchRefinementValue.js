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
* The ContentSearchRefinementValue model module.
* @module models/ContentSearchRefinementValue
* @version 20.4
*/
export default class ContentSearchRefinementValue {
    /**
    * Constructs a new <code>ContentSearchRefinementValue</code>.
    * Document representing a search refinement value.
    * @alias module:models/ContentSearchRefinementValue
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>ContentSearchRefinementValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ContentSearchRefinementValue} obj Optional instance to populate.
    * @return {module:models/ContentSearchRefinementValue} The populated <code>ContentSearchRefinementValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentSearchRefinementValue()





            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('hit_count')) {
                obj.hit_count = ApiClient.convertToType(data.hit_count, 'Number')
            }
            if (data.hasOwnProperty('label')) {
                obj.label = ApiClient.convertToType(data.label, 'String')
            }
            if (data.hasOwnProperty('presentation_id')) {
                obj.presentation_id = ApiClient.convertToType(data.presentation_id, 'String')
            }
            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
            if (data.hasOwnProperty('values')) {
                obj.values = ApiClient.convertToType(data.values, [ContentSearchRefinementValue])
            }
        }
        return obj
    }

    /**
    * The localized description of the refinement value.
    * @member {String} description
    */
    description = undefined;
    /**
    * The number of search hits (0 or more) when selecting the refinement value.
    * @member {Number} hit_count
    */
    hit_count = undefined;
    /**
    * The localized label of the refinement value.
    * @member {String} label
    */
    label = undefined;
    /**
    * The optional presentation id associated with the refinement value.  The presentation id can be used, for example, to associate an id with  an HTML widget.
    * @member {String} presentation_id
    */
    presentation_id = undefined;
    /**
    * The refinement value. In the case of an attribute refinement, this is the bucket,  the attribute value, or a value range. In the case of a content folder refinement,  this is the folder id.
    * @member {String} value
    */
    value = undefined;
    /**
    * The array of hierarchical refinement values. This array can be empty.
    * @member {Array.<module:models/ContentSearchRefinementValue>} values
    */
    values = undefined;








}
