async function operator(proxies = []) {
    const _ = lodash
    return proxies.map((p = {}) => {
        _.set(p, 'name', `${_.get(p, 'name')}-钉钉`) // 名称添加后缀
        //_.set(p, 'port', 80)  // 默认不限端口
        _.set(p, 'ws-opts.headers.Host', 'tms.dingtalk.com') // 改混淆
        return p
    })
}
