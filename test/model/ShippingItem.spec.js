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
    instance = new ShopApi.ShippingItem()
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

describe('ShippingItemModel', () => {
    it('should create an instance of ShippingItemModel', () => {
        // uncomment below and update the code to test ShippingItemModel
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be.a(ShopApi.ShippingItem);
    })

    it('should have the property adjustedTax (base name: "adjusted_tax")', () => {
        // uncomment below and update the code to test the property adjustedTax
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property basePrice (base name: "base_price")', () => {
        // uncomment below and update the code to test the property basePrice
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property itemId (base name: "item_id")', () => {
        // uncomment below and update the code to test the property itemId
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property itemText (base name: "item_text")', () => {
        // uncomment below and update the code to test the property itemText
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property price (base name: "price")', () => {
        // uncomment below and update the code to test the property price
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property priceAdjustments (base name: "price_adjustments")', () => {
        // uncomment below and update the code to test the property priceAdjustments
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property priceAfterItemDiscount (base name: "price_after_item_discount")', () => {
        // uncomment below and update the code to test the property priceAfterItemDiscount
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property shipmentId (base name: "shipment_id")', () => {
        // uncomment below and update the code to test the property shipmentId
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property tax (base name: "tax")', () => {
        // uncomment below and update the code to test the property tax
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property taxBasis (base name: "tax_basis")', () => {
        // uncomment below and update the code to test the property taxBasis
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property taxClassId (base name: "tax_class_id")', () => {
        // uncomment below and update the code to test the property taxClassId
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

    it('should have the property taxRate (base name: "tax_rate")', () => {
        // uncomment below and update the code to test the property taxRate
        // var instane = new ShopApi.ShippingItem()
        // expect(instance).to.be();
    })

})
