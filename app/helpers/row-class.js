import { helper } from '@ember/component/helper';

export function rowClass(params/*, hash*/) {
  if (params[0]) {
    var row = params[0],
        class_names = [];
      if (row.Boards === 0 || row.BoardsSum === 0) {
        class_names.push("zero");
      }

      return class_names.join(" ");
  }
  return '';
}

export default helper(rowClass);
