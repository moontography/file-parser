import Parser from './libs/Parser'

export default function FileParser(dataTop?: string | Buffer) {
  return {
    /**
     * load()
     *   Description: Given the parameters, extend the current instance to include methods exposed in a loaded Parser()
     *
     *   Parameters
     *     data [REQUIRED]: [string | Buffer] either string of path on file system or Buffer of file
     *
     **/
    load(data?: string | Buffer) {
      const dataRequired = data || dataTop

      if (!dataRequired)
        throw new Error(
          `No data provided. Must pass file path or file buffer of file.`
        )
      
      return Parser(dataRequired)
    },
  }
}
