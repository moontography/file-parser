import assert from 'assert'
import fs from 'fs'
import path from 'path'
import { read } from 'xlsx'
import FileParser from './FileParser'

const csvFilePath = path.join(__dirname, '..', 'tests', 'list.csv')
const wbFilePath = path.join(__dirname, '..', 'tests', 'spreadsheet.xlsx')

const initCsv = fs.readFileSync(csvFilePath)
const initWb = read(wbFilePath, { type: 'file' })

describe('FileParser', function () {
  describe('#load', function () {
    it(`should load the csv into Parser from file on file system`, async function () {
      const parser = FileParser(csvFilePath).load()
      const parsedCsv = await parser.getFile()
      assert.deepStrictEqual(csvFilePath, parsedCsv)
    })

    it(`should load the csv into Parser from Buffer`, async function () {
      const parser = FileParser(initCsv).load()
      const parsedCsv = await parser.getFile()
      assert.deepStrictEqual(initCsv, parsedCsv)
    })

    it(`should load the workbook into Parser from file on file system`, async function () {
      const parser = FileParser().load(wbFilePath)
      const parsedWb = await parser.getFile()
      assert.deepStrictEqual(initWb, parsedWb)
    })

    it(`should load the workbook into Parser from Buffer`, async function () {
      const buffer = fs.readFileSync(wbFilePath)
      const parser = FileParser(buffer).load()
      const parsedWb = await parser.getFile()
      assert.deepStrictEqual(initWb, parsedWb)
    })

    it(`should throw error with no data passed`, function () {
      assert.throws(() => {
        FileParser().load()
      })
    })
  })
})
