/** @flow */
import AbstractError from '../../../error/abstract-error';

export default class InvalidBitConfigPropPath extends AbstractError {
  fieldName: string;
  fieldValue: string;

  constructor(fieldName: string, fieldValue: string) {
    super();
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
  }
}
