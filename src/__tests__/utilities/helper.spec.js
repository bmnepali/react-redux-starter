/* global expect:false */
/* eslint-env node, mocha */

// Utilities
import Helper from '../../utilities/helper';

// Test Suite
describe('Testing Helper Functions', () => {
  describe('isEmpty()', () => {
    it('checks if the empty object is empty', () => {
      expect(Helper.isEmpty({})).toBeTruthy();
    });

    it('checks if the empty array is empty', () => {
      expect(Helper.isEmpty([])).toBeTruthy();
    });

    it('checks if the empty string is empty', () => {
      expect(Helper.isEmpty('')).toBeTruthy();
    });

    it('checks if the empty null is empty', () => {
      expect(Helper.isEmpty('')).toBeTruthy();
    });

    it('checks if the empty undefined is empty', () => {
      expect(Helper.isEmpty(undefined)).toBeTruthy();
    });
  });

  describe('updateObject(ojbect, key, value)', () => {
    it('sets given value in an object', () => {
      const testObj = {
        name: {
          firstName: '',
          lastName: '',
        },
        email: '',
      };
      Helper.updateObject(testObj, 'email', 'test@gmail.com');
      expect(testObj.email).toBe('test@gmail.com');
    });

    it('sets given value in nested property of an object', () => {
      const testObj = {
        name: {
          firstName: '',
          lastName: '',
        },
        email: '',
      };
      Helper.updateObject(testObj, 'name.firstName', 'John');
      Helper.updateObject(testObj, 'name.lastName', 'Smith');

      expect(testObj.name.firstName).toBe('John');
      expect(testObj.name.lastName).toBe('Smith');
    });

    it('sets given value in an Array', () => {
      const testObj = [
        {
          name: {
            firstName: '',
            lastName: '',
          },
          hobbies: ['', '', ''],
        },
        {
          name: {
            firstName: '',
            lastName: '',
          },
          hobbies: ['', '', ''],
        },
      ];

      Helper.updateObject(testObj, '1.name.firstName', 'Updated Name');
      Helper.updateObject(testObj, '1.hobbies.1', 'changed hobby');

      expect(testObj[1].name.firstName).toBe('Updated Name');
      expect(testObj[1].hobbies[1]).toBe('changed hobby');
    });
  });
});
