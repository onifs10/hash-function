const hashPassword = require('./hash');

test('test "lovely"', () => {
    expect(hashPassword('lovely')).toBe('olevob')
})


test('test "abc', () => {
    expect(hashPassword('abc')).toBe('zyx')
})

test('test "acp"',() => {
    expect(hashPassword('acp')).toBe('zxk')
})

test('test For Capital Letter "ABcef"', () => {
    expect(hashPassword('ABcef')).toBe('ZYxvu') 
})

test('test for other characters "mathe12@matis12"', () => {
    expect(hashPassword('mathe12@matis12')).toBe('nzgsv12@nzgrh12')
})