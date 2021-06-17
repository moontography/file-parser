import assert from 'assert'
import path from 'path'
import fs from 'fs'
import { read } from 'xlsx'
import Parser from './Parser'

const csvFilePath = path.join(__dirname, '..', '..', 'tests', 'list.csv')
const wbFilePath = path.join(__dirname, '..', '..', 'tests', 'spreadsheet.xlsx')

const initWb = read(wbFilePath, { type: 'file' })

describe('Parser', function () {
  describe('#getCsv', function () {
    it(`should get the csv passed into Parser`, async function () {
      const parser = Parser(csvFilePath)
      const csv = await parser.getFile()
      assert.deepStrictEqual(csvFilePath, csv)
    })
  })

  describe('#parseCsv', async function () {
    it(`should parse the csv into an object`, async function () {
      const parser = Parser(csvFilePath)
      const parsedCsv = await parser.parseFile()
      assert.deepStrictEqual([
        {
          "Column 1": "Row 1 Column 1",
          "Column 2": "Row 1 Column 2",
          "Column 3": "Row 1 Column 3",
        },
        {
          "Column 1": "Row 2 Column 1",
          "Column 2": "Row 2 Column 2",
          "Column 3": "Row 2 Column 3",
        },
        {
          "Column 1": "Row 3 Column 1",
          "Column 2": "Row 3 Column 2",
          "Column 3": "Row 3 Column 3",
        }
      ], parsedCsv)
    })
  })
    
  describe('#getWorkbook', function () {
    it(`should get the workbook passed into Parser`, async function () {
      const parser = Parser(wbFilePath)
      const wb = await parser.getFile()
      assert.deepStrictEqual(initWb, wb)
    })
  })

  describe('#parseWorkbook', async function () {
    it(`should parse the workbook into an object`, async function () {
      const parser = Parser(wbFilePath)
      const parsedWb = await parser.parseFile()
      assert.deepStrictEqual(
        ['Sheet 1', 'Sheet 2', 'Sheet 3', 'Empty Sheet'],
        Object.keys(parsedWb)
      )
      assert.deepStrictEqual(
        {
          'Column 1': 'Row 1 column 1',
          'Column 2': 'Row 1 column 2',
          'Column 3': 'Row 1 column 3',
          'Column 4': 'Row 1 column 4',
          'Column 5': '1/1/2020',
        },
        parsedWb['Sheet 1'][0]
      )
      assert.deepStrictEqual([], parsedWb['Empty Sheet'])
    })
  })

  it(`should throw error with if unable to parse`, async function () {
    assert.rejects(async () => {
      await Parser('').parseFile()
    })
  })
})
