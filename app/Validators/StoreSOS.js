'use strict'

class StoreSOS {
  get rules() {
    return {
      // validation rules
      'sos': 'required',
      'level': 'required|not_in:0|integer|unique:sos,level'
    }
  }

  get messages() {
    return {
      //validation messages
      'sos.required': 'Stage Of Study is required.',
      'level.required': 'Level is required.',
      'level.not_in': 'Level must not be a zero',
      'level.unique': 'Level already exist.',
      'level.integer': 'Level must be a number',
    }
  }
}

module.exports = StoreSOS
