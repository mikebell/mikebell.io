---
title: Building Node JS on Raspberry Pi

tags:
---
'gcc': {
    'all': {
      'CCFLAGS':      ['$DIALECTFLAGS', '$WARNINGFLAGS', '-march=armv5t'],

if bld.env["SNAPSHOT_V8"]:
    snapshot = ""
  else:
    snapshot = ""
