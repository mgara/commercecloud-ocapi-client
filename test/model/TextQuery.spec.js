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

import expect from 'expect.js'
import ShopApi from '../../src/index'

let instance

beforeEach(() => {
    instance = new ShopApi.TextQuery()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('TextQueryModel', () => {
    it('should create an instance of TextQueryModel', () => {
        // uncomment below and update the code to test TextQueryModel
        // var instane = new ShopApi.TextQuery()
        // expect(instance).to.be.a(ShopApi.TextQuery);
    })

    it('should have the property fields (base name: "fields")', () => {
        // uncomment below and update the code to test the property fields
        // var instane = new ShopApi.TextQuery()
        // expect(instance).to.be();
    })

    it('should have the property searchPhrase (base name: "search_phrase")', () => {
        // uncomment below and update the code to test the property searchPhrase
        // var instane = new ShopApi.TextQuery()
        // expect(instance).to.be();
    })

})
