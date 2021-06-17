import FileType from 'file-type'
import fs from 'fs'
import parse from 'csv-parse/lib/sync'
import SpreadsheetParser from '@risk3sixty/spreadsheet-parser'

export default function Parser(file: string | Buffer) {

  return {
    async getFile() {
      const fileType = file instanceof Buffer ? (await FileType.fromBuffer(file) || {}).ext : file.split('.').pop()
      if (fileType == 'xlsx'){
        const xlsxParser = SpreadsheetParser().load(file)
        return xlsxParser.getWorkbook()
      }

      return file
    },

    async parseFile() {
      const fileType = file instanceof Buffer ? (await FileType.fromBuffer(file) || {}).ext : file.split('.').pop()

      if (fileType == 'xlsx'){
        const xlsxParser = SpreadsheetParser().load(file)
        return xlsxParser.parseWorkbook()
      }

      if(fileType == 'csv') {
        const data = fs.readFileSync(file)
        const rows = parse(data, { 
          columns: true,
        })
        return rows
      }

      throw new Error('Unable to parse file, file type not supported.')
    }
  }
}
