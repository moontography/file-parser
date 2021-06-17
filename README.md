## File Parser

Takes in a file or buffer and parses it to an easily consumable format.

### Install

```sh
$ npm install @moontography/file-parser
```

### Usage

```
import FileParser from '@moontography/file-parser'

const parser = FileParser().load(data) // data(required): filepath (String) or Buffer
// const parser = FileParser(data).load() // also acceptable

// NOTE: This is a blocking command, so be aware when parsing multiple files or large files

const csvData = await parser.parseFile() // returns parsed data for .csv file
// [
//    // Row 1
//    {
//      'Column 1 Header': 'Column 1 Row 1 Value',
//      'Column 2 Header': 'Column 2 Row 1 Value',
//      'Column 3 Header': 'Column 3 Row 1 Value',
//    },
//    // Row 2
//    {
//      'Column 1 Header': 'Column 1 Row 2 Value',
//      'Column 2 Header': 'Column 2 Row 2 Value',
//      'Column 3 Header': 'Column 3 Row 2 Value',
//    },
//    // Row 3
//    {
//      'Column 1 Header': 'Column 1 Row 3 Value',
//      'Column 2 Header': 'Column 2 Row 3 Value',
//      'Column 3 Header': 'Column 3 Row 3 Value',
//    }
//  ],

const xlsxData = await parser.parseFile() // returns parsed workbook for .xlsx file
// {
//  'Sheet 1 Name': [
//    // Row 1
//    {
//      'Column 1 Header': 'Column 1 Row 1 Value',
//      'Column 2 Header': 'Column 2 Row 1 Value',
//      'Column 3 Header': 'Column 3 Row 1 Value',
//    },
//    // Row 2
//    {
//      'Column 1 Header': 'Column 1 Row 2 Value',
//      'Column 2 Header': 'Column 2 Row 2 Value',
//      'Column 3 Header': 'Column 3 Row 2 Value',
//    },
//    // Row 3
//    {
//      'Column 1 Header': 'Column 1 Row 3 Value',
//      'Column 2 Header': 'Column 2 Row 3 Value',
//      'Column 3 Header': 'Column 3 Row 3 Value',
//    }
//  ],
//
//  'Sheet 2 Name': [
//    // Row 1
//    {
//      'Column 1 Header': 'Column 1 Row 1 Value',
//      'Column 2 Header': 'Column 2 Row 1 Value',
//      'Column 3 Header': 'Column 3 Row 1 Value',
//    },
//    // Row 2
//    {
//      'Column 1 Header': 'Column 1 Row 2 Value',
//      'Column 2 Header': 'Column 2 Row 2 Value',
//      'Column 3 Header': 'Column 3 Row 2 Value',
//    },
//    // Row 3
//    {
//      'Column 1 Header': 'Column 1 Row 3 Value',
//      'Column 2 Header': 'Column 2 Row 3 Value',
//      'Column 3 Header': 'Column 3 Row 3 Value',
//    }
//  ]
// }
```

### Development

#### Build

```sh
$ npm install
```

```sh
# To build the distribution files (automatically runs at end of `npm install`)
$ npm run build
```

```sh
# To run tests
$ npm test
```
