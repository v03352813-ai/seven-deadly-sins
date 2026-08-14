import os

app_js_path = r'd:\虚拟测试产品\app.js'

with open(app_js_path, 'r', encoding='utf-8') as f:
    js_code = f.read()

# Replace openMiniProgramAd with clean popup
old_ad = """// Mini Program Launch Function with Official QR Code Modal
function openMiniProgramAd() {
  try { window.location.href = MINI_PROGRAM_LINK; } catch (e) {}

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(MINI_PROGRAM_LINK);
  }

  var modalHtml = `
    <div id="qrModal" class="modal-overlay show" style="z-index:99999;">"""

new_ad = """// Mini Program Launch Function with Official QR Code Modal
function openMiniProgramAd() {
  var modalHtml = `
    <div id="qrModal" class="modal-overlay show" style="z-index:99999;">"""

if old_ad in js_code:
    js_code = js_code.replace(old_ad, new_ad)
    print("Fixed openMiniProgramAd in app.js!")
else:
    print("Could not find old_ad in app.js")

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(js_code)
