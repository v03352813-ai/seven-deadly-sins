/**
 * 七宗罪灵魂暗面测试 - 方案3：小红书 3:4 超清海报生成引擎 (1080×1440)
 * 集成：7大魔神王座插画、纯净7维原生雷达图、倾斜爆款印章、维度血条排行榜与防伪条码
 */

/**
 * 七宗罪灵魂暗面测试 - 方案3：小红书 3:4 超清海报生成引擎 (1080×1440)
 * 支持 3 大爆款 C 位版型轮换：
 * 1. 'avatar' (默认/经典立绘款)：魔神真身插画居中，下方左右分列雷达与排行
 * 2. 'radar' (灵魂蛛网款)：高清全息 7 维蛛网大阵居中，下方分列立绘与排行
 * 3. 'ranking' (罪位排行款)：高光罪名血条大榜居中，下方分列立绘与雷达
 */

function generateSinPoster(result, userName = '探索者', theme = 'avatar') {
    return new Promise((resolve, reject) => {
        try {
            const width = 1080;
            const height = 1440;
            
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');

            const dominant = result.dominant || { id: 'pride', meta: { name: '傲慢' } };
            const dominantId = dominant.id || 'pride';
            const ranking = result.ranking || [];
            const hellVisitor = result.hellVisitor || { title: '地狱来了一位【独行者】', tagline: '冷眼旁观，洞悉深渊' };
            const percentages = result.percentages || {};
            const judge = result.judgeAvatar || (typeof JUDGE_AVATARS !== 'undefined' ? JUDGE_AVATARS[dominantId] : null) || { judgeName: '深渊主宰' };
            const report = (typeof REPORTS_DATA !== 'undefined' && REPORTS_DATA[dominantId]) ? REPORTS_DATA[dominantId] : { coreMotto: '直面深渊真实罪印' };

            // 预加载魔神王座高清立绘
            const demonImg = new Image();
            if (window.location.protocol.startsWith('http')) {
                demonImg.crossOrigin = 'anonymous';
            }
            demonImg.src = `assets/images/characters/${dominantId}.jpg`;

            demonImg.onload = () => {
                renderAllPosterContent();
            };

            demonImg.onerror = () => {
                console.warn('魔神插画加载失败，降级生成海报');
                renderAllPosterContent(false);
            };

            function renderAllPosterContent(hasDemonImg = true) {
                // 1. 绘制深邃黑金+暗红哥特背景
                const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, 850);
                bgGrad.addColorStop(0, '#150a1b');
                bgGrad.addColorStop(0.5, '#0d0712');
                bgGrad.addColorStop(1, '#050307');
                ctx.fillStyle = bgGrad;
                ctx.fillRect(0, 0, width, height);

                // 2. 顶部卷宗最高标识与标题（1:1 绘制在海报图片最顶部）
                ctx.textAlign = 'center';
                ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
                ctx.font = '700 18px monospace';
                ctx.letterSpacing = '4px';
                ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
                ctx.shadowBlur = 6;
                ctx.fillText('SEVEN DEADLY SINS · SOUL PSYCHE REPORT', width / 2, 52);

                ctx.fillStyle = '#ffffff';
                ctx.font = '900 36px "Noto Serif SC", serif';
                ctx.letterSpacing = '2px';
                ctx.shadowColor = 'rgba(212, 175, 55, 0.85)';
                ctx.shadowBlur = 18;
                ctx.fillText('📜 七宗罪 · 灵魂罪印卷宗', width / 2, 98);
                ctx.shadowBlur = 0;

                // 3. 绘制主体卷宗画框
                const cardX = 28;
                const cardY = 138;
                const cardW = width - 56;
                const cardH = 1272;

                ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
                ctx.lineWidth = 2.5;
                ctx.strokeRect(cardX, cardY, cardW, cardH);

                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 1;
                ctx.strokeRect(cardX + 10, cardY + 10, cardW - 20, cardH - 20);

                drawCornerAccents(ctx, cardX, cardY, cardW, cardH, 18);

                // 4. 画框内部主标题与金句文案
                ctx.textAlign = 'center';
                ctx.fillStyle = '#ffffff';
                ctx.font = '900 30px "Noto Serif SC", serif';
                ctx.letterSpacing = '2px';
                ctx.shadowColor = 'rgba(212, 175, 55, 0.85)';
                ctx.shadowBlur = 16;

                if (theme === 'radar') {
                    ctx.fillText(`【原罪分布】 ${judge.judgeName || '深渊主宰'} · 灵魂暗面全息阵`, width / 2, 194);
                    ctx.shadowBlur = 0;
                    ctx.font = 'italic 700 17.5px "Noto Serif SC", serif';
                    ctx.fillStyle = '#fbbf24';
                    ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
                    ctx.shadowBlur = 10;
                    ctx.fillText(`“直面七维潜意识深度投影与原罪占比”`, width / 2, 230);
                } else if (theme === 'ranking') {
                    const topSinName = ranking[0]?.meta?.name || '傲慢';
                    const topSinScore = ranking[0]?.score || 98;
                    ctx.fillText(`【罪位阶梯】 第一主罪宣判：${topSinName} (${topSinScore}%)`, width / 2, 194);
                    ctx.shadowBlur = 0;
                    ctx.font = 'italic 700 17.5px "Noto Serif SC", serif';
                    ctx.fillStyle = '#fbbf24';
                    ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
                    ctx.shadowBlur = 10;
                    ctx.fillText(`“七宗罪恶念排序与深渊侵蚀梯队”`, width / 2, 230);
                } else {
                    // 默认 avatar 经典款
                    ctx.fillText(`【觉醒神位】 ${judge.judgeName || '深渊主宰'}`, width / 2, 194);
                    ctx.shadowBlur = 0;
                    ctx.font = 'italic 700 17.5px "Noto Serif SC", serif';
                    ctx.fillStyle = '#fbbf24';
                    ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
                    ctx.shadowBlur = 10;
                    ctx.fillText(`“${report.coreMotto || '直面深渊真实罪印'}”`, width / 2, 230);
                }
                ctx.shadowBlur = 0;

                // 5. 渲染三大模块（根据不同 theme 布局）
                if (theme === 'radar') {
                    renderThemeRadarLayout();
                } else if (theme === 'ranking') {
                    renderThemeRankingLayout();
                } else {
                    renderThemeAvatarLayout();
                }

                resolve(canvas.toDataURL('image/png', 0.95));
            }

            // 版型 1：经典立绘 C 位
            function renderThemeAvatarLayout() {
                const imgW = 380;
                const imgH = 425;
                const imgX = (width - imgW) / 2;
                const imgY = 265;

                if (demonImg && demonImg.complete && demonImg.naturalWidth > 0) {
                    drawImageCover(ctx, demonImg, imgX, imgY, imgW, imgH, 18);
                } else {
                    ctx.fillStyle = '#140c18';
                    drawRoundedRect(ctx, imgX, imgY, imgW, imgH, 18);
                    ctx.fill();
                }

                ctx.strokeStyle = 'rgba(212, 175, 55, 0.75)';
                ctx.lineWidth = 2.5;
                drawRoundedRect(ctx, imgX, imgY, imgW, imgH, 18);
                ctx.stroke();

                ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                ctx.lineWidth = 1;
                drawRoundedRect(ctx, imgX + 6, imgY + 6, imgW - 12, imgH - 12, 14);
                ctx.stroke();

                drawStickerBanner(732);

                // 底部双区：左侧雷达 + 右侧排行
                const titlesY = 852;
                drawSectionTitle('—  七 宗 罪 维 度 分 布  —', 280, titlesY);
                drawSectionTitle('—  七 宗 罪 维 度 排 行  —', 760, titlesY);

                drawPosterNativeRadar(ctx, 280, 1050, 118, percentages, dominantId);
                drawPosterRankingBars(560, 888, 230, 44);

                // 底部 1:1 绘制【光暗双生：七美德伪装镜像】卡片
                drawPosterVirtueCard(1246);
            }

            // 版型 2：灵魂蛛网 C 位
            function renderThemeRadarLayout() {
                const boxW = 760;
                const boxH = 425;
                const boxX = (width - boxW) / 2;
                const boxY = 265;

                // 背景大框
                ctx.fillStyle = 'rgba(12, 7, 16, 0.9)';
                drawRoundedRect(ctx, boxX, boxY, boxW, boxH, 18);
                ctx.fill();

                ctx.strokeStyle = 'rgba(212, 175, 55, 0.75)';
                ctx.lineWidth = 2.5;
                drawRoundedRect(ctx, boxX, boxY, boxW, boxH, 18);
                ctx.stroke();

                // 绘制超清大雷达
                drawPosterNativeRadar(ctx, width / 2, boxY + boxH / 2 + 8, 148, percentages, dominantId);

                drawStickerBanner(732);

                // 底部双区：左侧立绘小卡片 + 右侧血条排行
                const titlesY = 852;
                drawSectionTitle('—  觉 醒 魔 神 真 身  —', 280, titlesY);
                drawSectionTitle('—  七 宗 罪 维 度 排 行  —', 760, titlesY);

                // 左侧立绘小卡片
                const subImgW = 260;
                const subImgH = 310;
                const subImgX = 150;
                const subImgY = 888;
                if (demonImg && demonImg.complete && demonImg.naturalWidth > 0) {
                    drawImageCover(ctx, demonImg, subImgX, subImgY, subImgW, subImgH, 14);
                }
                ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
                ctx.lineWidth = 2;
                drawRoundedRect(ctx, subImgX, subImgY, subImgW, subImgH, 14);
                ctx.stroke();

                // 立绘底部名字
                ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
                drawRoundedRect(ctx, subImgX, subImgY + subImgH - 42, subImgW, 42, 0);
                ctx.fill();
                ctx.textAlign = 'center';
                ctx.font = '700 17px "Noto Serif SC", serif';
                ctx.fillStyle = '#fbbf24';
                ctx.fillText(judge.judgeName || '深渊主宰', subImgX + subImgW / 2, subImgY + subImgH - 14);

                // 右侧排行
                drawPosterRankingBars(560, 888, 230, 44);

                // 底部 1:1 绘制【光暗双生：七美德伪装镜像】卡片
                drawPosterVirtueCard(1246);
            }

            // 版型 3：罪位排行 C 位
            function renderThemeRankingLayout() {
                const boxW = 760;
                const boxH = 425;
                const boxX = (width - boxW) / 2;
                const boxY = 265;

                // 背景大框
                ctx.fillStyle = 'rgba(12, 7, 16, 0.9)';
                drawRoundedRect(ctx, boxX, boxY, boxW, boxH, 18);
                ctx.fill();

                ctx.strokeStyle = 'rgba(212, 175, 55, 0.75)';
                ctx.lineWidth = 2.5;
                drawRoundedRect(ctx, boxX, boxY, boxW, boxH, 18);
                ctx.stroke();

                // 居中大排行榜 (大号血条)
                drawPosterRankingBars(boxX + 35, boxY + 18, 380, 54, true);

                drawStickerBanner(732);

                // 底部双区：左侧立绘小卡片 + 右侧雷达图
                const titlesY = 852;
                drawSectionTitle('—  觉 醒 魔 神 真 身  —', 280, titlesY);
                drawSectionTitle('—  七 宗 罪 维 度 分 布  —', 760, titlesY);

                // 左侧立绘小卡片
                const subImgW = 260;
                const subImgH = 310;
                const subImgX = 150;
                const subImgY = 888;
                if (demonImg && demonImg.complete && demonImg.naturalWidth > 0) {
                    drawImageCover(ctx, demonImg, subImgX, subImgY, subImgW, subImgH, 14);
                }
                ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
                ctx.lineWidth = 2;
                drawRoundedRect(ctx, subImgX, subImgY, subImgW, subImgH, 14);
                ctx.stroke();

                ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
                drawRoundedRect(ctx, subImgX, subImgY + subImgH - 42, subImgW, 42, 0);
                ctx.fill();
                ctx.textAlign = 'center';
                ctx.font = '700 17px "Noto Serif SC", serif';
                ctx.fillStyle = '#fbbf24';
                ctx.fillText(judge.judgeName || '深渊主宰', subImgX + subImgW / 2, subImgY + subImgH - 14);

                // 右侧雷达图
                drawPosterNativeRadar(ctx, 760, 1050, 118, percentages, dominantId);

                // 底部 1:1 绘制【光暗双生：七美德伪装镜像】卡片
                drawPosterVirtueCard(1246);
            }

            // 辅助绘制【光暗双生：七美德伪装镜像】底部横幅卡片 (1:1 还原网页端翡翠绿边质感)
            function drawPosterVirtueCard(cardY = 1246) {
                const vInfo = result.virtueMask || {
                    score: result.virtueScore || 68,
                    subLabel: '人前伪装 vs 深渊本色',
                    detail: '你在世俗社交中极擅长用谦和、从容和高情商掩盖骨子里的骄傲与居高临下的降维审视。'
                };
                const virtueScore = vInfo.score;
                const subLabel = vInfo.subLabel || '人前伪装 vs 深渊本色';
                const detailText = vInfo.detail || '你在世俗社交中极擅长用理智和温和掩盖内心的暗黑火焰。';

                const x = 56;
                const y = cardY;
                const w = width - 112;
                const h = 118;

                ctx.save();
                
                // 1. 卡片黑色半透明背景
                ctx.fillStyle = 'rgba(14, 8, 18, 0.95)';
                drawRoundedRect(ctx, x, y, w, h, 14);
                ctx.fill();

                // 2. 外框微弱白色边线
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
                ctx.lineWidth = 1;
                drawRoundedRect(ctx, x, y, w, h, 14);
                ctx.stroke();

                // 3. 左侧高亮翡翠绿竖线 (1:1 还原网页端 border-left: 4.5px solid #10b981)
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x + 2, y + 14);
                ctx.lineTo(x + 2, y + h - 14);
                ctx.strokeStyle = '#10b981';
                ctx.lineWidth = 4.5;
                ctx.lineCap = 'round';
                ctx.shadowColor = 'rgba(16, 185, 129, 0.85)';
                ctx.shadowBlur = 10;
                ctx.stroke();
                ctx.restore();

                // 4. 第一行文字：左侧标题 + 右侧副标题
                const topRowY = y + 36;

                // 左侧：🕊️ 光暗双生：七美德伪装镜像
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.font = '800 20px "Noto Serif SC", serif';
                ctx.fillStyle = '#10b981';
                ctx.shadowColor = 'rgba(16, 185, 129, 0.6)';
                ctx.shadowBlur = 8;
                ctx.fillText('🕊️ 光暗双生：七美德伪装镜像', x + 24, topRowY);
                ctx.shadowBlur = 0;

                // 右侧：人前伪装 vs 深渊本色 / 动态子标签
                ctx.textAlign = 'right';
                ctx.font = '600 15px "Noto Serif SC", sans-serif';
                ctx.fillStyle = '#9ca3af';
                ctx.fillText(subLabel, x + w - 24, topRowY);

                // 5. 第二行正文描述
                const descY = y + 76;
                ctx.textAlign = 'left';
                ctx.font = '500 15px "Noto Serif SC", sans-serif';
                ctx.fillStyle = '#9ca3af';
                
                const prefix = '你在人前展现的伪装指数：';
                ctx.fillText(prefix, x + 24, descY);
                const prefixW = ctx.measureText(prefix).width;

                ctx.font = '800 17px "Noto Serif SC", monospace';
                ctx.fillStyle = '#ffffff';
                ctx.fillText(`${virtueScore}%`, x + 24 + prefixW, descY);
                const scoreW = ctx.measureText(`${virtueScore}%`).width;

                ctx.font = '500 15px "Noto Serif SC", sans-serif';
                ctx.fillStyle = '#9ca3af';
                const suffix = `。${detailText}`;
                ctx.fillText(suffix, x + 24 + prefixW + scoreW, descY);

                ctx.restore();
            }

            // 辅助绘制倾斜贴纸
            function drawStickerBanner(stickerY = 745) {
                ctx.save();
                ctx.translate(width / 2, stickerY);
                ctx.rotate(-2.5 * Math.PI / 180);

                const badgeW = 740;
                const badgeH = 120;
                ctx.fillStyle = 'rgba(10, 4, 12, 0.95)';
                drawRoundedRect(ctx, -badgeW / 2, -badgeH / 2, badgeW, badgeH, 16);
                ctx.fill();

                ctx.strokeStyle = 'rgba(220, 38, 38, 0.85)';
                ctx.lineWidth = 2.5;
                drawRoundedRect(ctx, -badgeW / 2, -badgeH / 2, badgeW, badgeH, 16);
                ctx.stroke();

                ctx.textAlign = 'center';
                ctx.font = '900 44px "Noto Serif SC", "PingFang SC", sans-serif';
                ctx.fillStyle = '#ffffff';
                ctx.shadowColor = 'rgba(220, 38, 38, 0.95)';
                ctx.shadowBlur = 20;
                ctx.fillText(hellVisitor.title, 0, -10);

                ctx.font = '600 17.5px sans-serif';
                ctx.fillStyle = '#fbbf24';
                ctx.shadowBlur = 0;
                ctx.fillText(`“${hellVisitor.tagline}”`, 0, 35);
                ctx.restore();
            }

            // 辅助绘制副标题
            function drawSectionTitle(text, x, y) {
                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'rgba(212, 175, 55, 0.98)';
                ctx.font = '900 23px "Noto Serif SC", serif';
                ctx.letterSpacing = '5px';
                ctx.shadowColor = 'rgba(212, 175, 55, 0.45)';
                ctx.shadowBlur = 8;
                ctx.fillText(text, x, y);
                ctx.restore();
            }

            // 辅助绘制血条排行榜
            function drawPosterRankingBars(startX, startY, barMaxWidth, rowHeight = 44, isLarge = false) {
                ranking.forEach((item, idx) => {
                    const currentY = startY + idx * rowHeight;
                    const meta = item.meta || { code: item.id.toUpperCase().slice(0, 2), name: item.id };
                    const badgeRadius = isLarge ? 20 : 16;

                    // 徽章
                    ctx.beginPath();
                    ctx.arc(startX, currentY + (isLarge ? 18 : 12), badgeRadius, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                    ctx.fill();
                    ctx.strokeStyle = idx === 0 ? '#fbbf24' : 'rgba(212, 175, 55, 0.35)';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    ctx.textAlign = 'center';
                    ctx.font = isLarge ? '700 15px monospace' : '700 12px monospace';
                    ctx.fillStyle = idx === 0 ? '#fbbf24' : 'rgba(255, 255, 255, 0.85)';
                    ctx.fillText(meta.code, startX, currentY + (isLarge ? 23 : 16));

                    // 名称
                    ctx.textAlign = 'left';
                    ctx.font = isLarge ? '900 22px "Noto Serif SC", sans-serif' : '700 17px "Noto Serif SC", sans-serif';
                    ctx.fillStyle = idx === 0 ? '#fbbf24' : '#f3f4f6';
                    ctx.fillText(meta.name, startX + (isLarge ? 36 : 32), currentY + (isLarge ? 25 : 18));

                    // 血条底色
                    const barX = startX + (isLarge ? 100 : 85);
                    const barY = currentY + (isLarge ? 6 : 4);
                    const barH = isLarge ? 20 : 14;
                    drawRoundedRect(ctx, barX, barY, barMaxWidth, barH, barH / 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
                    ctx.fill();

                    // 血条填充
                    const fillWidth = Math.max((item.score / 100) * barMaxWidth, 10);
                    drawRoundedRect(ctx, barX, barY, fillWidth, barH, barH / 2);
                    const barGrad = ctx.createLinearGradient(barX, 0, barX + fillWidth, 0);
                    if (idx === 0) {
                        barGrad.addColorStop(0, '#d97706');
                        barGrad.addColorStop(1, '#fbbf24');
                    } else if (idx < 3) {
                        barGrad.addColorStop(0, '#7f1d1d');
                        barGrad.addColorStop(1, '#dc2626');
                    } else {
                        barGrad.addColorStop(0, '#450a0a');
                        barGrad.addColorStop(1, '#991b1b');
                    }
                    ctx.fillStyle = barGrad;
                    ctx.fill();

                    // 分数
                    ctx.textAlign = 'right';
                    ctx.font = isLarge ? '900 24px monospace' : '900 19px monospace';
                    ctx.fillStyle = idx === 0 ? '#fbbf24' : '#ffffff';
                    ctx.fillText(`${item.score}%`, barX + barMaxWidth + (isLarge ? 70 : 55), currentY + (isLarge ? 26 : 18));
                });
            }
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * 绘制海报专用 7 维原生雷达图
 */
function drawPosterNativeRadar(ctx, cx, cy, r, percentages, dominantId) {
    ctx.save();
    const sinsOrder = [
        { id: 'pride', name: '傲慢' },
        { id: 'greed', name: '贪婪' },
        { id: 'lust', name: '色欲' },
        { id: 'envy', name: '嫉妒' },
        { id: 'gluttony', name: '暴食' },
        { id: 'wrath', name: '暴怒' },
        { id: 'sloth', name: '懒惰' }
    ];
    const angleStep = (Math.PI * 2) / 7;

    // 1. 同心正七边形蛛网
    const levels = 4;
    for (let l = 1; l <= levels; l++) {
        const levelRadius = (r / levels) * l;
        ctx.beginPath();
        ctx.strokeStyle = l === levels ? 'rgba(212, 175, 55, 0.5)' : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = l === levels ? 1.5 : 1;
        if (l < levels) {
            ctx.setLineDash([3, 3]);
        } else {
            ctx.setLineDash([]);
        }

        for (let i = 0; i < 7; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = cx + Math.cos(angle) * levelRadius;
            const y = cy + Math.sin(angle) * levelRadius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
    ctx.setLineDash([]);

    // 2. 放射轴线
    for (let i = 0; i < 7; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    // 3. 用户得分数据多边形
    const userPoints = [];
    for (let i = 0; i < 7; i++) {
        const sin = sinsOrder[i];
        const pct = percentages[sin.id] || 35;
        const pointRadius = Math.max(r * (pct / 100), r * 0.18);
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * pointRadius;
        const y = cy + Math.sin(angle) * pointRadius;
        userPoints.push({ x, y, name: sin.name, pct, angle, isDominant: sin.id === dominantId });
    }

    ctx.save();
    ctx.beginPath();
    userPoints.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();

    const polyGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, r);
    polyGrad.addColorStop(0, 'rgba(220, 38, 38, 0.7)');
    polyGrad.addColorStop(0.7, 'rgba(185, 28, 28, 0.45)');
    polyGrad.addColorStop(1, 'rgba(212, 175, 55, 0.3)');
    ctx.fillStyle = polyGrad;
    ctx.fill();

    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(239, 68, 68, 0.9)';
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.restore();

    // 4. 绘制高光节点与百分比标签
    userPoints.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.isDominant ? 5 : 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = p.isDominant ? '#fbbf24' : '#ef4444';
        ctx.lineWidth = 2;
        ctx.stroke();

        const cosVal = Math.cos(p.angle);
        const sinVal = Math.sin(p.angle);
        const labelDist = r + 22;
        let lx = cx + cosVal * labelDist;
        let ly = cy + sinVal * labelDist;

        if (cosVal < -0.2) {
            ctx.textAlign = 'right';
        } else if (cosVal > 0.2) {
            ctx.textAlign = 'left';
        } else {
            ctx.textAlign = 'center';
        }

        ctx.textBaseline = 'middle';
        ctx.font = '800 14px "Noto Serif SC", sans-serif';

        ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
        for (let ox = -1.5; ox <= 1.5; ox += 1.5) {
            for (let oy = -1.5; oy <= 1.5; oy += 1.5) {
                ctx.fillText(`${p.name} ${p.pct}%`, lx + ox, ly + oy);
            }
        }

        ctx.fillStyle = p.isDominant || p.pct >= 80 ? '#fbbf24' : '#ffffff';
        ctx.fillText(`${p.name} ${p.pct}%`, lx, ly);
    });
    ctx.restore();
}

function drawCornerAccents(ctx, x, y, w, h, size) {
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.9)';
    ctx.lineWidth = 2.5;

    // Top-Left
    ctx.beginPath();
    ctx.moveTo(x + size, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + size);
    ctx.stroke();

    // Top-Right
    ctx.beginPath();
    ctx.moveTo(x + w - size, y);
    ctx.lineTo(x + w, y);
    ctx.lineTo(x + w, y + size);
    ctx.stroke();

    // Bottom-Left
    ctx.beginPath();
    ctx.moveTo(x, y + h - size);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x + size, y + h);
    ctx.stroke();

    // Bottom-Right
    ctx.beginPath();
    ctx.moveTo(x + w - size, y + h);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x + w, y + h - size);
    ctx.stroke();
}

function drawPseudoBarcode(ctx, x, y, width, height) {
    const bars = [3, 1, 4, 1, 2, 5, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4, 1, 3, 1];
    let curX = x;
    ctx.fillStyle = 'rgba(212, 175, 55, 0.7)';

    for (let i = 0; i < bars.length; i++) {
        const barW = bars[i];
        if (i % 2 === 0) {
            ctx.fillRect(curX, y, barW * 2, height - 14);
        }
        curX += barW * 2 + 2;
        if (curX > x + width) break;
    }

    ctx.textAlign = 'left';
    ctx.font = '600 11px monospace';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.7)';
    ctx.fillText('SOUL-ARCHIVE-CODE', x, y + height - 2);
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

function drawImageCover(ctx, img, x, y, w, h, radius = 18) {
    const imgW = img.naturalWidth || img.width || 1;
    const imgH = img.naturalHeight || img.height || 1;
    const imgRatio = imgW / imgH;
    const boxRatio = w / h;
    let sx = 0, sy = 0, sw = imgW, sh = imgH;
    if (imgRatio > boxRatio) {
        sw = imgH * boxRatio;
        sx = (imgW - sw) / 2;
    } else {
        sh = imgW / boxRatio;
        sy = 0; // 靠上对齐，确保人物面容、皇冠与毛领完整展示且绝不拉伸变形
    }
    ctx.save();
    if (radius > 0) {
        drawRoundedRect(ctx, x, y, w, h, radius);
        ctx.clip();
    }
    ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
    ctx.restore();
}
