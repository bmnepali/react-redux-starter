class Helper {
  /**
   * Check if the object is empty
   * @param object
   * @return Boolean
   */
  isEmpty(object) {
    const hasOwnProperty = Object.prototype.hasOwnProperty;

    if (object === null) return true;
    if (object === undefined) return true;
    if (object.length > 0) return false;
    if (object.length === 0) return true;
    if (typeof object !== 'object') return true;

    for (const key in object) {
      if (hasOwnProperty.call(object, key)) return false;
    }

    return true;
  }

  /**
   * Updates object with given value
   * @param {Object} object Current object
   * @param {String} key Dot seperated string
   * @param {String} value Value to be set
   *
   * @return {object}
   */
  updateObject(object, key, value) {
    let currentState = object;
    const propChain = key.split('.') || [];

    for (let p = 0; p < propChain.length; p++) {
      if (currentState && currentState.hasOwnProperty(propChain[p])) {
        if (p !== propChain.length - 1) {
          currentState = currentState[propChain[p]];
        } else {
          currentState[propChain[p]] = value;
        }
      }
    }

    return currentState;
  }

  /**
   * Return Item by its index number
   * @param {Array[Object]} list
   * @param {Integer} index
   * @param {Object|Array} fbObj
   * @returns {string}
   */
  getItemByIndex(list, index = 0) {
    return list[index] !== undefined ? list[index] : null;
  }
}

export default new Helper();
