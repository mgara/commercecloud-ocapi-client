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
    instance = new ShopApi.CustomObjectModel()
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

  describe('CustomObjectModel', function() {
    it('should create an instance of CustomObjectModel', function() {
      // uncomment below and update the code to test CustomObjectModel
      //var instane = new ShopApi.CustomObjectModel()
      //expect(instance).to.be.a(ShopApi.CustomObjectModel);
    });

    it('should have the property keyProperty (base name: "key_property")', function() {
      // uncomment below and update the code to test the property keyProperty
      //var instane = new ShopApi.CustomObjectModel()
      //expect(instance).to.be();
    });

    it('should have the property keyValueInteger (base name: "key_value_integer")', function() {
      // uncomment below and update the code to test the property keyValueInteger
      //var instane = new ShopApi.CustomObjectModel()
      //expect(instance).to.be();
    });

    it('should have the property keyValueString (base name: "key_value_string")', function() {
      // uncomment below and update the code to test the property keyValueString
      //var instane = new ShopApi.CustomObjectModel()
      //expect(instance).to.be();
    });

    it('should have the property objectType (base name: "object_type")', function() {
      // uncomment below and update the code to test the property objectType
      //var instane = new ShopApi.CustomObjectModel()
      //expect(instance).to.be();
    });

  });

}));
