var BLOCKED_HOST = '0.gravatar.com fonts.gstatic.com fonts.googleapis.com hm.baidu.com cpro.baidu.com f.f70123.com f.e704.net g.163.com ipservice.163.com web.stat.ws.126.net api.money.126.net rec.g.163.com popme.163.com p.tanx.com tanx.com plpp.cre99.com static.pay.baidu.com als.baidu.com cbjs.baidu.com comet.blog.sina.com.cn d1.sina.com.cn d2.sina.com.cn d3.sina.com.cn d4.sina.com.cn d5.sina.com.cn d6.sina.com.cn beacon.sina.com.cn footprint.cws.api.sina.com.cn hits.sinajs.cn blogtj.sinajs.cn api.geetest.com control.blog.sina.com.cn d00.sina.com.cn log.mix.sina.com.cn sjs.sinajs.cn static.bshare.cn dup.baidustatic.com su.bdimg.com datax.baidu.com entry.baidu.com dj1.baidu.com t10.baidu.com t11.baidu.com t12.baidu.com assets.changyan.sohu.com pic.fastapi.net g.fastapi.net pic.ggxt.net g.ggxt.net x.jd.com count.cankaoxiaoxi.com px.3.cn im-x.jd.com bshare.optimix.asia rm.api.weibo.com s.alitui.weibo.com sax.sina.com.cn biz.weibo.com contentrecommend-out.mobile.sina.cn d0.sina.com.cn rs.sinajs.cn wbpctips.mobile.sina.cn nas.im.api.weibo.com erebor.douban.com push.douban.com fundin.douban.com dev.visualwebsiteoptimizer.com www.visualwebsiteoptimizer.com visualwebsiteoptimizer.com www.dratio.com cas.sh.cn.criteo.com www.criteo.com criteo.com static.criteo.net www.criteo.net criteo.net images.sh.cn.criteo.net s.cr-nielsen.com www.cr-nielsen.com cr-nielsen.com comment.ifeng.com iis1.deliver.ifeng.com cm.l.qq.com dolphin.deliver.ifeng.com js.revsci.net pix04.revsci.net www.revsci.net revsci.net cm.cn.miaozhen.com www.miaozhen.com miaozhen.com stadig.ifeng.com games.ifeng.com znsv.baidu.com crs.baidu.com znsv.baidu. my.chinaz.com stats.chinaz.com ers.baidu.com ecma.baidu.com app.chinaz.com tjs.sjs.sinajs.cn kxlogo.knet.cn changyan.sohu.com cl5.webterren.com changyan.itc.cn s8.qhimg.com s7.qhimg.com p0.qhimg.com bbs2.chinaz.com cpro.baidustatic.com redirect.simba.taobao.com kstj.baidu.com valb.atm.youku.com vid.atm.youku.com valo.atm.youku.com valf.atm.youku.com walp.atm.youku.com static.atm.youku.com images.sohu.com atm.youku.com Fvid.atm.youku.com html.atm.youku.com valc.atm.youku.com valp.atm.youku.com lstat.youku.com speed.lstat.youku.com urchin.lstat.youku.com stat.youku.com xnimg.cn techpowerup.com acs.agent.56.com acs.56.com gug.ku6cdn.com pcs1.app.joy.cn 86file.megajoy.com video.gougou.com advstat.xunlei.com dl.xunlei.com i.xunlei.com kkpgv.xunlei.com mtips.xunlei.com pstatic.xunlei.com dynamic.kankan.xunlei.com js.kankan.xunlei.com statis.kankan.xunlei.com biz.sandai.net biz2.sandai.net biz3.sandai.net biz4.sandai.net biz5.sandai.net biz6.sandai.net mediapv.sandai.net mpv.sandai.net mcfg.sandai.net server1.adpolestar.net at-img1.tdimg.com at-img2.tdimg.com at-img3.tdimg.com at-img4.tdimg.com adextensioncontrol.tudou.com adcontrol.tudou.com union.mtime.cn p2v.tudou.com adplay.tudou.com stat.tudou.com v2.stat.ku6.com v3.stat.ku6.com v0.stat.ku6.com v1.stat.ku6.com st.vq.ku6.cn stat2.888.ku6.com pq.stat.ku6.com bill.agent.56.com union.56.com v16.56.com simba.6.cn pole.6rooms.com shrek.6.cn static.lstat.youku.com iwstat.tudou.com nstat.tudou.com stats.tudou.com live.github.com collector.githubapp.com qr.liantu.com push.zhanzhang.baidu.com sp0.baidu.com cpv.ggytc.com www.ggycpm.com p2.hyz86.com cp.ggyapp.com sugar.zhihu.com ds.api.baifendian.com static1.baifendian.com www.baifendian.com baifendian.com ds.api.baifendian.com afp.alicdn.com hits.xilu.com js.passport.qihucdn.com afpmm.alicdn.com siteapp.baidu.com pingtas.qq.com fashion.sina.com.cn comment5.news.sina.com.cn portrait5.sinaimg.cn d9.sina.com.cn interface.sina.cn storage.fedev.sina.com.cn ecma.bdimg.com imageplus.baidu.com bzclk.baidu.com api.pr.163.com pstatic.xunlei.com dvs.china.com track.china.com rank.hit.china.com player.youku.com www.qcw.com static.googleadsserving.cn click.aliyun.com dn-growing.qbox.me platform.twitter.com cdn.heapanalytics.com'.split(' ');

var BLOCKED_WORDS = 'cnzz 0745zpl twyxi jb51 360doc qihu qihoo open-open e70123 duoshuo 51.la 360.cn 51yes alimama jiathis.com google-analytics wrating mediav.com share.baidu.com pos.baidu.com bnhtml csbew walkme sc933 114so at98 ad-survey /ads/ .ads. feitian001 youle55 3dwwwgame media8 twcczhu fwt0 yule8 fwt0 0101122 /a_if/ /gg/ /ab2/ _ad_ mmstat bosstatic kejet adinall jtxh hayohui qtmojo xtgreat p0y zhuanle360 ouyafoods 52896368 sina678 shuma2 jixing8 jixian360 yfi8 51ads zhuanle360 qucaigg googleadsserving googleads doubleclick googlesyndication'.split(' ');

var BLOCKED_DOMAINS = 'baidu youdao sogou qq.com sina sohu youdao google'.split(' ');

function blockHost(host) {
    var colon;
    host = host.substring(host.indexOf('://') + 3);
    host = host.substring(0, host.indexOf('/'));
    colon = host.indexOf(':');
    if (colon > 0) {
        host = host.substring(0, colon);
    }
    return host && BLOCKED_HOST.indexOf(host) > -1;
}

function blockWords(host) {
    for (var i = 0; i < BLOCKED_WORDS.length; i++) {
        if (host.indexOf(BLOCKED_WORDS[i]) > -1) {
            console.log('[Word] ' + BLOCKED_WORDS[i]);
            return true;
        }
    }
}

function blockDomain(host) {
    var currentTab;

    // TODO async
    chrome.windows.getCurrent(function(currentWindow) {
        chrome.tabs.query({
            active: true,
            windowId: currentWindow.id
        }, function(activeTabs) {
            currentTab = activeTabs[0].url;
        });
    });

    // if not baidu, block baidu
    for (var i = 0; i < BLOCKED_DOMAINS.length; i++) {
        if (currentTab && currentTab.indexOf(BLOCKED_DOMAINS[i]) < 0 && host.indexOf(BLOCKED_DOMAINS[i]) > 0) {
            console.log('[Word] ' + BLOCKED_DOMAINS[i]);
            return true;
        }
    }
}

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            cancel: blockWords(details.url) || blockHost(details.url) || blockDomain(details.url)
        };
    }, {
        urls: ["<all_urls>"]
    }, ["blocking"]
);