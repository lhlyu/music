export default defineEventHandler(async event => {
    const response = await fetch('https://api.tjit.net/tool/music', {
        method: 'GET',
        headers: {
            referrer: 'https://api.tjit.net/tool/music'
        }
    })
    if (!response.ok) {
        console.log('[api/config]: 请求失败')
        return {
            id: '',
            token: ''
        }
    }
    const id = extractApiSessId(response.headers.getSetCookie())
    if (id === '') {
        console.log('[api/config]: cookie解析失败')
        return {
            id: '',
            token: ''
        }
    }

    const html = await response.text()

    const token = extractToken(html)

    if (token === '') {
        console.log('[api/config]: token解析失败')
        return {
            id: '',
            token: ''
        }
    }

    return {
        id: id,
        token: token
    }
})

function extractApiSessId(cookies: string[]): string {
    if (cookies.length === 0) {
        return ''
    }
    for (let i = 0; i < cookies.length; i++) {
        const rows = cookies[i].split(';')
        for (let j = 0; j < rows.length; j++) {
            const cols = rows[j].trim().split('=')
            if (cols.length === 2) {
                if (cols[0] === 'API_SESSID') {
                    return cols[1]
                }
            }
        }
    }
    return ''
}

function extractToken(html: string): string {
    const match = /token="([a-fA-F0-9]+)"/.exec(html)
    if (match) {
        return match[1]
    }
    return ''
}
