import { writeFileSync } from "node:fs"
import config from "../build.config.js"
import slice from "./utils/slice.js"
import isInIgnoredDir from "./utils/isInIgnoredDir.js"
import { indexFilePath } from "./utils/path.js"
import { dateFormater } from "./utils/timeFormat.js"

export default function(newestList) {
    const ignoreDirs = config.enableNewest.ignoreDir
    const filtered = newestList.filter(item =>
        !isInIgnoredDir(item.path, ignoreDirs)
    )
    const sliced = slice(filtered)
    const count  = sliced.length

    let index = 0
    for (const slice of sliced) {
        index += 1
        writeFileSync(indexFilePath + "newest_" + index, JSON.stringify({
            total: count,
            current: index,
            content: slice.map(item => {
                return {
                    title: item.name,
                    link:  item.path,
                    date:  dateFormater(item.createTime)
                }
            }),
        }))
    }
}