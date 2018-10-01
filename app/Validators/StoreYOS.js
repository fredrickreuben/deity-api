'use strict'

class YOS {
  get rules () {
    return {
      // validation rules
      'start_date': 'required|date|unique:yos,start_date',
      'end_date': 'required|date|unique:yos,end_date'
    }
  }

  get messages() {
    return {
      //validation messages
      'start_date.required': 'Start date is required.',
      'start_date.date': 'Start date must be a valid date.',
      'start_date.unique': 'Year of study already exist.',
      'end_date.unique': 'Year of study already exist.',
      'end_date.required': 'End date is required.',
      'end_date.date': 'End date must  be a valid date.',
    }
  }
}

module.exports = YOS
