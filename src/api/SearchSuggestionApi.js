/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable camelcase */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'
import SuggestionResult from '../models/SuggestionResult'

/**
 * Search_suggestion service.
 * @module api/SearchSuggestionApi
 * @version 17.8
 */
export default class SearchSuggestionApi {

    /**
     * Constructs a new SearchSuggestionApi.
     * @alias module:api/SearchSuggestionApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }



    /**
     * Provides keyword search functionality for products, categories, content, brands and custom
     * suggestions.  Returns suggested products, suggested categories, suggested content, suggested
     * brands and custom suggestions  for the given search phrase.
     * @param {String} q The query phrase to search for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The maximum number of suggestions per request. Default value is 5. This affects all types of suggestions (category, product, content, brand, custom suggestions).
     * @param {String} opts.currency The currency mnemonic specified for price. This parameter is effective only for product suggestions.
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SuggestionResult} and HTTP response
     */
    getSearchSuggestionWithHttpInfo(q, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'q' is set
        if (q === undefined || q === null) {
            throw new Error('Missing the required parameter \'q\' when calling getSearchSuggestion')
        }


        const pathParams = {}
        const queryParams = {
            q,
            count: opts.count,
            currency: opts.currency,
            locale: opts.locale
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = SuggestionResult

        return this.apiClient.callApi(
            '/search_suggestion', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Provides keyword search functionality for products, categories, content, brands and custom
     * suggestions.  Returns suggested products, suggested categories, suggested content, suggested
     * brands and custom suggestions  for the given search phrase.
     * @param {String} q The query phrase to search for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The maximum number of suggestions per request. Default value is 5. This affects all types of suggestions (category, product, content, brand, custom suggestions).
     * @param {String} opts.currency The currency mnemonic specified for price. This parameter is effective only for product suggestions.
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SuggestionResult}
     */
    getSearchSuggestion(q, opts) {
        return this.getSearchSuggestionWithHttpInfo(q, opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }


}
