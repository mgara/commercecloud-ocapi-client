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
    instance = new ShopApi.ProductSearchHit()
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

describe('ProductSearchHitModel', () => {
    it('should create an instance of ProductSearchHitModel', () => {
        // uncomment below and update the code to test ProductSearchHitModel
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be.a(ShopApi.ProductSearchHit);
    })

    it('should have the property currency (base name: "currency")', () => {
        // uncomment below and update the code to test the property currency
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property image (base name: "image")', () => {
        // uncomment below and update the code to test the property image
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property link (base name: "link")', () => {
        // uncomment below and update the code to test the property link
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property orderable (base name: "orderable")', () => {
        // uncomment below and update the code to test the property orderable
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property price (base name: "price")', () => {
        // uncomment below and update the code to test the property price
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property priceMax (base name: "price_max")', () => {
        // uncomment below and update the code to test the property priceMax
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property prices (base name: "prices")', () => {
        // uncomment below and update the code to test the property prices
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property productId (base name: "product_id")', () => {
        // uncomment below and update the code to test the property productId
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property productName (base name: "product_name")', () => {
        // uncomment below and update the code to test the property productName
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property productType (base name: "product_type")', () => {
        // uncomment below and update the code to test the property productType
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

    it('should have the property variationAttributes (base name: "variation_attributes")', () => {
        // uncomment below and update the code to test the property variationAttributes
        // var instane = new ShopApi.ProductSearchHit()
        // expect(instance).to.be();
    })

})
