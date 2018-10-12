#!/bin/bash
# 双击运行或者使用bash程序运行

#切换到bash文件所在目录
cd $(dirname $0)
#path=`pwd`
#echo "脚本所在目录${path}"

bash ./src/flavor/flavor.sh $@ && npm run dev:h5
#bash ./src/flavor/flavor.sh $@ && npm run dev:weapp

