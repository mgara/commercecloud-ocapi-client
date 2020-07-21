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
import ProductSearchHit from './ProductSearchHit'
import ProductSearchRefinement from './ProductSearchRefinement'
import ProductSearchSortingOption from './ProductSearchSortingOption'
import Suggestion from './Suggestion'





/**
* The ProductSearchResult model module.
* @module models/ProductSearchResult
* @version 20.4
*/
export default class ProductSearchResult {
    /**
    * Constructs a new <code>ProductSearchResult</code>.
    * Document representing a product search result.
    * @alias module:models/ProductSearchResult
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>ProductSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductSearchResult} obj Optional instance to populate.
    * @return {module:models/ProductSearchResult} The populated <code>ProductSearchResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchResult()





            if (data.hasOwnProperty('count')) {
                obj.count = ApiClient.convertToType(data.count, 'Number')
            }
            if (data.hasOwnProperty('data')) {
                obj.data = ApiClient.convertToType(data.data, [Object])
            }
            if (data.hasOwnProperty('fetch_date')) {
                obj.fetch_date = ApiClient.convertToType(data.fetch_date, 'Number')
            }
            if (data.hasOwnProperty('hits')) {
                obj.hits = ApiClient.convertToType(data.hits, [ProductSearchHit])
            }
            if (data.hasOwnProperty('next')) {
                obj.next = ApiClient.convertToType(data.next, 'String')
            }
            if (data.hasOwnProperty('previous')) {
                obj.previous = ApiClient.convertToType(data.previous, 'String')
            }
            if (data.hasOwnProperty('query')) {
                obj.query = ApiClient.convertToType(data.query, 'String')
            }
            if (data.hasOwnProperty('refinements')) {
                obj.refinements = ApiClient.convertToType(data.refinements, [ProductSearchRefinement])
            }
            if (data.hasOwnProperty('search_phrase_suggestions')) {
                obj.search_phrase_suggestions = Suggestion.constructFromObject(data.search_phrase_suggestions)
            }
            if (data.hasOwnProperty('selected_refinements')) {
                obj.selected_refinements = ApiClient.convertToType(data.selected_refinements, {String: 'String'})
            }
            if (data.hasOwnProperty('selected_sorting_option')) {
                obj.selected_sorting_option = ApiClient.convertToType(data.selected_sorting_option, 'String')
            }
            if (data.hasOwnProperty('sorting_options')) {
                obj.sorting_options = ApiClient.convertToType(data.sorting_options, [ProductSearchSortingOption])
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
    * The number of returned documents.
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {Array.<Object>} data
    */
    data = undefined;
    /**
    * @member {Number} fetch_date
    */
    fetch_date = undefined;
    /**
    * The sorted array of search hits. This array can be empty.
    * @member {Array.<module:models/ProductSearchHit>} hits
    */
    hits = undefined;
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
    * The query String that was searched for.
    * @member {String} query
    */
    query = undefined;
    /**
    * The sorted array of search refinements. This array can be empty.
    * @member {Array.<module:models/ProductSearchRefinement>} refinements
    */
    refinements = undefined;
    /**
    * The suggestion given by the system for the submitted search phrase.
    * @member {module:models/Suggestion} search_phrase_suggestions
    */
    search_phrase_suggestions = undefined;
    /**
    * A map of selected refinement attribute id/value(s) pairs. The sorting order is the same as in request URL.
    * @member {Object.<String, String>} selected_refinements
    */
    selected_refinements = undefined;
    /**
    * The id of the applied sorting option.
    * @member {String} selected_sorting_option
    */
    selected_sorting_option = undefined;
    /**
    * The sorted array of search sorting options. This array can be empty.
    * @member {Array.<module:models/ProductSearchSortingOption>} sorting_options
    */
    sorting_options = undefined;
    /**
    * The zero-based index of the first search hit to include in the result.
    * @member {Number} start
    */
    start = undefined;
    /**
    * The total number of documents.
    * @member {Number} total
    */
    total = undefined;








}


