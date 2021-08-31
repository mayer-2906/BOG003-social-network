import { functionInitial } from './indexInitial.js';
import { functionPost } from './indexPost.js';
import { functionNewAccount } from './indexNewAccount.js';
import { functionEdit } from './indexEdit.js';
import { functionErrors } from './indexError.js';
/* eslint-disable */
console.log('estoy en indexInitial',functionInitial());
const view = {
  initial: functionInitial(),
  newAccount: functionNewAccount(),
  post: functionPost(),
  edit: functionEdit(),
  errors: functionErrors(),
};
export default view;
