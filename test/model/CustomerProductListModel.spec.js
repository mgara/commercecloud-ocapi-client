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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShopApi);
  }
}(this, function(expect, ShopApi) {
  'use strict'

  var instance;

  beforeEach(() => {
    instance = new ShopApi.CustomerProductListModel()
  });

  var getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomerProductListModel', function() {
    it('should create an instance of CustomerProductListModel', function() {
      // uncomment below and update the code to test CustomerProductListModel
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be.a(ShopApi.CustomerProductListModel);
    });

    it('should have the property coRegistrant (base name: "co_registrant")', function() {
      // uncomment below and update the code to test the property coRegistrant
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property currentShippingAddressLink (base name: "current_shipping_address_link")', function() {
      // uncomment below and update the code to test the property currentShippingAddressLink
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property customerProductListItems (base name: "customer_product_list_items")', function() {
      // uncomment below and update the code to test the property customerProductListItems
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property itemsLink (base name: "items_link")', function() {
      // uncomment below and update the code to test the property itemsLink
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property postEventShippingAddressLink (base name: "post_event_shipping_address_link")', function() {
      // uncomment below and update the code to test the property postEventShippingAddressLink
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property productListShippingAddress (base name: "product_list_shipping_address")', function() {
      // uncomment below and update the code to test the property productListShippingAddress
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property _public (base name: "public")', function() {
      // uncomment below and update the code to test the property _public
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property registrant (base name: "registrant")', function() {
      // uncomment below and update the code to test the property registrant
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property shippingAddressLink (base name: "shipping_address_link")', function() {
      // uncomment below and update the code to test the property shippingAddressLink
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ShopApi.CustomerProductListModel()
      //expect(instance).to.be();
    });

  });

}));
