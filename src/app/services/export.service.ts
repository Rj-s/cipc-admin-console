import { Injectable } from '@angular/core';

class TableColumn {
  field: string;
  title: string;
  isExport: boolean;
  valuePrepareFunction: Function;
}

@Injectable()
export class ExportService {

  constructor() { }

  private prepareColumnMap(settingColumns): Map<string, TableColumn> {
    const columnMap: Map<string, TableColumn> = new Map<string, TableColumn>();
    for (const key in settingColumns) {
      if (!settingColumns.hasOwnProperty(key)) {
        continue;
      }
      const column: TableColumn = new TableColumn();
      column.title = settingColumns[key]['title'];
      column.field = key;
      column.isExport = settingColumns[key]['isExport'];
      column.valuePrepareFunction = settingColumns[key]['valuePrepareFunction'];
      columnMap.set(column.field, column);
    }
    return columnMap;
  }

  public export2Csv(source, settingColumns): void {
    const columnMap = this.prepareColumnMap(settingColumns);
    const columns: TableColumn[] = Array.from(columnMap.values());

    let encodedStr = columns.reduce((acct, current: TableColumn) => {
      if (current.isExport) {
        return acct += '"' + current.title + '",';
      } else {
        return acct;
      }
    }, '');

    encodedStr = encodedStr.slice(0, -1);
    encodedStr += '\r\n';

    const fields: string[] = columns.reduce((acct, column: TableColumn) => {
      if (column.isExport) {
        acct.push(column.field);
      }
      return acct;
    }, []);

    source.getAll().then((rows) => {
      rows.forEach((row) => {
        fields.forEach((field) => {
          if (row.hasOwnProperty(field)) {
            let value = row[field];

            if (!value) {
              value = ' ';
            }
            const valuePrepare = columnMap.get(field).valuePrepareFunction;
            if (valuePrepare) {
              value = valuePrepare.call(null, value, row);
            }
            encodedStr += '"' + value + '",';
          }
        });
        encodedStr = encodedStr.slice(0, -1);
        encodedStr += '\r\n';
      });

      const a = document.createElement('a');
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      // Set utf-8 header to let excel recognize its encoding
      const blob = new Blob(['\ufeff', encodedStr], { type: 'text/csv;charset=utf-8;' });
      a.href = window.URL.createObjectURL(blob);
      a.download = ('data-file') + '.csv';
      a.click();
    });
  }
}
