/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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
import expect from 'expect.js'
import ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'


let instance
let client

before(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: {'x-dw-client-id': clientId}
    })
})

beforeEach(() => {
    instance = new ShopApi.FoldersApi(client)
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('FoldersApi', () => {

    describe('getFoldersByID', () => {
        it('should call getFoldersByID successfully', () =>
            instance.getFoldersByID('root')
                .then((category) => {
                    if (!category) { throw error }

                    expect(category.id).to.be('root')
                })
        )

        it('should return FolderNotFoundException for getFoldersByID with bad folder id', () =>
            instance.getFoldersByID('bad_folder_id')
                .catch((fault) => {
                    expect(fault.type).to.be('FolderNotFoundException')
                })
        )
    })

    describe('getFoldersByIDs', () => {
        it('should call getFoldersByIDs successfully', () =>
            instance.getFoldersByIDs(['root'])
                .then((result) => {
                    expect(result.constructor.name).to.be('ContentFolderResult')
                })
        )

        it('should get correct number of folders', () =>
            instance.getFoldersByIDs(['about-us', 'customer-service'])
                .then((result) => {
                    expect(result.count).to.be(2)
                })
        )
    })
})
