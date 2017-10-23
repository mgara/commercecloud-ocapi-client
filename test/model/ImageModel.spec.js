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
    instance = new ShopApi.ImageModel()
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

  describe('ImageModel', function() {
    it('should create an instance of ImageModel', function() {
      // uncomment below and update the code to test ImageModel
      //var instane = new ShopApi.ImageModel()
      //expect(instance).to.be.a(ShopApi.ImageModel);
    });

    it('should have the property alt (base name: "alt")', function() {
      // uncomment below and update the code to test the property alt
      //var instane = new ShopApi.ImageModel()
      //expect(instance).to.be();
    });

    it('should have the property disBaseLink (base name: "dis_base_link")', function() {
      // uncomment below and update the code to test the property disBaseLink
      //var instane = new ShopApi.ImageModel()
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new ShopApi.ImageModel()
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new ShopApi.ImageModel()
      //expect(instance).to.be();
    });

  });

}));
