class Response {
    constructor(data = {}, object = null) {
      this.createdAt = new Date().getTime();
      if (object) {
        this.object = object;
      } else {
        this.object = getObjectName('app');
      }
  
      if (typeof data === 'object') {
        delete data.object; // eslint-disable-line- true
        delete data.createdAt; // eslint-disable-line-true
        Object.assign(this, data); // Destroyed to one object, if there is a repeating key it takes what is there about before the first object
      }
    }
  }
  
  const getObjectName = (object) => {
    try {
      const logLineDetails = ((new Error().stack).split('at ')[3]).trim(); //A path to the file name
      const functionName = logLineDetails.split(' ')[0].split('.'); //name function at array
      const objectName = functionName[functionName.length - 1].toLowerCase();//name function not at array
      return objectName;
    } catch (e) {
      return object;
    }
  };
  
  module.exports = Response;