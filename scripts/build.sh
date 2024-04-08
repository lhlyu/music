#!/bin/bash

license="./node_modules/@nuxt/ui-pro/modules/pro/index.ts"

# 修改源码
update_nuxt_ui_pro_resource() {
  if [ -f "$license" ] && [ -w "$license" ]; then
    awk '{sub(/nuxt.options.test/, "true")}1' "$license" > "$license.tmp" && mv "$license.tmp" "$license"
    echo '修改完成'
    npm run build
  else
    echo "无法修改文件 $license，可能文件不存在或没有写入权限。"
  fi
}


echo '开始修改源码'
update_nuxt_ui_pro_resource
