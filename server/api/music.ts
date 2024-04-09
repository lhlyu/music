import { customSha1 } from '~/utils'

export default defineEventHandler(async event => {
    const query = getQuery(event)

    const apiUrl = getSoSignUrl(query.token as string, query.word as string)

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            referrer: 'https://api.tjit.net/tool/music',
            Cookie: `API_SESSID=${query.id}`
        }
    })
    const result = await response.json()
    return result
})

const getSoSignUrl = (token: string, word: string): string => {
    const apiUrl = `api?type=so&id=&word=${word}&page=1&per_page=10&topid=&period=&token=${token}`
    return 'https://api.tjit.net/tool/' + signUrl(apiUrl)
}

function signUrl(url: string) {
    return url + '&sign=' + sign(url.slice(4).replace(/\s/g, ''))
}
function sign(param: string): string {
    return customSha1('musicAPI_W79bx28AqH2xX10i03qr5h9AE1qXGQq1' + customSha1(param))
}
